import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { AppError } from "./erros/AppError";
import cors from "cors";
import path from "node:path";

import { routes } from "./routes";

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(routes);

// Criando rotas estáticas: retornando a imagem ao acessar a URL upload/....

app.use("/uploads", express.static(path.resolve(__dirname, ".", "uploads")));

// Definindo se o erro é meu ou interno e mesmo não usando a função next eu preciso dela
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }
  return res.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
});

app.listen(3333, () => console.log("🚀 Server is running in port 3333"));
