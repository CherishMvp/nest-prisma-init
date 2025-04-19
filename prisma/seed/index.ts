// import { PrismaClient } from '../../generated/prisma/client';
import { PrismaClient } from '@prisma/client';
import { products } from './products';
import { poultry } from './poultry';

const prisma = new PrismaClient();

async function main() {
  const count = await prisma.product.count();
  const poultryCount = await prisma.poultry.count();
  if (count === 0) {
    for (let product of products) {
      await prisma.product.create({
        data: product,
      });
    }
  }

  if (poultryCount === 0) {
    for (let item of poultry) {
      await prisma.poultry.create({
        data: item,
      });
    }
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$connect();
  });
