-- CreateTable
CREATE TABLE `Players` (
    `playersId` INTEGER NOT NULL AUTO_INCREMENT,
    `playersName` VARCHAR(191) NOT NULL,
    `speed` INTEGER NOT NULL,
    `shouting` INTEGER NOT NULL,
    `grade` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Players_playersName_key`(`playersName`),
    PRIMARY KEY (`playersId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
