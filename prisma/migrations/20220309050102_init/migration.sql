-- CreateTable
CREATE TABLE "prisma_test" (
    "id" SERIAL NOT NULL,
    "timestanp" TIMESTAMP(3) NOT NULL,
    "hogehoge" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "prisma_test_pkey" PRIMARY KEY ("id")
);
