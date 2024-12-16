import express from "express";
import { prisma } from "../utils/prisma/index.js";

const router = express.Router();

router.post("/players", async (req, res) => {
  const { playersName, speed, shouting, grade } = req.body;
  const player = await prisma.players.create({
    data: {
      playersName: playersName,
      speed: speed,
      shouting: shouting,
      grade: grade,
    },
  });
  return res.status(201).json({ messege: "선수가 생성됐습니다", data: player });
});

router.get("/players", async (req, res) => {
  const player = await prisma.players.findMany({});

  return res
    .status(200)
    .json({ message: "전체선수가 조회됐습니다.", data: player });
});

router.get("/palyers/:playerId", async (req, res) => {
  const { playerId } = req.params;
  const player = await prisma.players.findFirst({
    where: { playerId: playerId },
  });
  if (!player) {
    return res
      .status(404)
      .json({ message: "선수를 찾을 수가 없습니다", data: player });
  }
  return res
    .status(200)
    .json({ message: "선수가 상세조회 됐습니다", data: player });
});

router.delete('players/:playerId', async(res, req) => {
  const { playerId } = req.params;

  const player = await prisma.players.findFirst({
    where: { playerId: playerId}
  });

  if(!player)
    return res.status(404).json({ message: '선수가 존재하지 않습니다.' });

  await prisma.players.delete({where: { playerId: playerId} });

  return res.status(200).json({ data: '선수가 삭제됐습니다. '})
})

export default router;
