import type { Request, Response } from "express";

export function getRoot(_req: Request, res: Response): void {
  res.json({ ok: true, message: "mockworks-server" });
}
