-- CreateTable
CREATE TABLE `UploadDocuments` (
    `id` VARCHAR(191) NOT NULL,
    `file` VARCHAR(191) NOT NULL,
    `type` ENUM('pdf', 'txt', 'png', 'jpeg', 'jpg') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `footers` (
    `id` VARCHAR(191) NOT NULL,
    `companyName` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `phoneNos` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `urls` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `path` VARCHAR(191) NOT NULL,
    `footerId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `urls` ADD CONSTRAINT `urls_footerId_fkey` FOREIGN KEY (`footerId`) REFERENCES `footers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
