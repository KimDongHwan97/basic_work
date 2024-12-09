import express from "express";
import { prisma } from "../utils/prisma/index.js";

const router = express.Router();

//선수 생성
router.post("/players", async (req, res, next) => {
  const { playersName, speed, shouting, grade } = req.body;
  const player = await prisma.players.create({
    data: {
      playersName: playersName,
      speed: speed,
      shouting: shouting,
      grade: grade,
    },
  });

  return res.status(201).json({ message: "선수가 생성됐습니다.", data: player });
});

// 선수 전체조회
router.get("/players", async (req, res, next) => {
  const player = await prisma.players.findMany({
    select: {
      playersId: true,
      playersName: true,
      speed: true,
      shouting: true,
      grade: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return res.status(200).json({ message: "선수 전체조회가 됐습니다.", data: player });
});

// 선수 상세조회
router.get("/players/:playersId", async (req, res, next) => {
  const { playersId } = req.params;
  const player = await prisma.players.findFirst({
    where: { playersId: +playersId },
    select: {
      playersId: true,
      playersName: true,
      speed: true,
      shouting: true,
      grade: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return res.status(200).json({ message: "선수 상세조회가 됐습니다.",data: player });
});

// 선수 수정
router.put("/players/:playersId", async (req, res, next) => {
  const { playersId } = req.params;
  const { speed, shouting, grade } = req.body;

  const player = await prisma.players.findUnique({
    where: { playersId: +playersId },
  });

  if (!player)
    return res.status(404).json({ message: "선수가 존재하지 않습니다." });

  await prisma.players.update({
    data: { speed, shouting, grade },
    where: {
      playersId: +playersId,
    },
  });

  return res.status(200).json({ data: "선수가 수정되었습니다." });
});

// 선수 삭제
router.delete("/players/:playersId", async (req, res, next) => {
  const { playersId } = req.params;

  const player = await prisma.players.findFirst({
    where: { playersId: +playersId },
  });

  if (!player)
    return res.status(404).json({ message: "선수가 존재하지 않습니다." });

  await prisma.players.delete({ where: { playersId: +playersId } });

  return res.status(200).json({ data: "선수가 삭제되었습니다." });
});

export default router;
