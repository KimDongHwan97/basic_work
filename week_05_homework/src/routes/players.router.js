import express from 'express';
import { prisma } from "../../utils/prisma/index.js"

const router = express.Router();

router.post("/players", async (req, res) => {
  try {
    const { playersName, speed, shouting, grade } = req.body;
    const player = await prisma.players.create({
      data: {
        playersName: playersName,
        speed: speed,
        shouting: shouting,
        grade: grade,
      },
    });
    return res.status(201).json({ message: "선수가 생성됐습니다", data: player });
  } catch (error) {
    return res.status(500).json({ message: "서버 오류가 발생했습니다.", error: error.message });
  }
});

router.get("/players", async (req, res) => {
  try {
    const players = await prisma.players.findMany({});
    return res.status(200).json({ message: "전체 선수가 조회됐습니다.", data: players });
  } catch (error) {
    return res.status(500).json({ message: "서버 오류가 발생했습니다.", error: error.message });
  }
});

router.get("/players/:playerId", async (req, res) => {
  try {
    const { playerId } = req.params;
    const player = await prisma.players.findFirst({
      where: { playerId: playerId }, // playerId를 숫자로 변환
    });
    if (!player) {
      return res.status(404).json({ message: "선수를 찾을 수가 없습니다" });
    }
    return res.status(200).json({ message: "선수가 상세 조회됐습니다", data: player });
  } catch (error) {
    return res.status(500).json({ message: "서버 오류가 발생했습니다.", error: error.message });
  }
});

router.delete("/players/:playerId", async (req, res) => {
  try {
    const { playerId } = req.params;

    const player = await prisma.players.findFirst({
      where: { playerId: playerId }, // playerId를 숫자로 변환
    });

    if (!player) {
      return res.status(404).json({ message: "선수가 존재하지 않습니다." });
    }

    await prisma.players.delete({
      where: { playerId: playerId },
    });

    return res.status(200).json({ message: "선수가 삭제됐습니다." });
  } catch (error) {
    return res.status(500).json({ message: "서버 오류가 발생했습니다.", error: error.message });
  }
});



export default router;
