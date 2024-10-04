const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const newApplication = await prisma.scienceDayApplication.create({
    data: {
      studentName: 'Dhvani Patel',
      schoolName: 'LDRP',
      schoolAddress: 'KH 5',
      schoolCity: 'Gandhinagar',
      schoolState: 'Guj',
      schoolPincode: '62704',
      teacherName: 'Madhuri mam',
      teacherEmail: 'abc@example.com',
      modelType: 'Physics Model',
      participationType: 'Model',
    },
  });
  console.log('Application created:', newApplication);
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
