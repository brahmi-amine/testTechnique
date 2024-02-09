import { Server as HttpServer } from "http";
import { Server as SocketIOServer } from "socket.io";

interface UserConnections {
  [email: string]: string[];
}
/**
 * The `initializeSocketIO` function initializes a Socket.IO server and handles user connections, registration of email addresses, disconnection of
 * users, and sending and receiving messages.
 * @param {HttpServer} httpServer - The `httpServer` parameter is an instance of the `HttpServer` class. It represents the HTTP server that will be used
 * for the Socket.IO server.
 * @returns The function `initializeSocketIO` returns an instance of the Socket.IO server.
 */
export const initializeSocketIO = (httpServer: HttpServer) => {
  const io = new SocketIOServer(httpServer, {
    cors: {
      origin: "*",
    },
  });
  const userConnections: UserConnections = {};

  io.on('connection', (socket) => {

    socket.on('registerEmail', (email) => {
      if (userConnections[email]) {
        userConnections[email].push(socket.id);
      } else {
        userConnections[email] = [socket.id];
      }

      socket.on('disconnect', () => {
        const email = Object.keys(userConnections).find(key => userConnections[key].includes(socket.id));
        if (email && userConnections[email]) {
          userConnections[email] = userConnections[email].filter(id => id !== socket.id);
          if (userConnections[email].length === 0) {
            delete userConnections[email];
          }
        }
      });
    });

    socket.on('sendMessage', ({ subject, content, from, to }) => {
      if (userConnections[to]) {
        const message = { subject, content, from, to };
        userConnections[to].forEach(socketId => {
          io.to(socketId).emit('receiveMessage', message);
        });
      }
    });
  });


  return io;
};
