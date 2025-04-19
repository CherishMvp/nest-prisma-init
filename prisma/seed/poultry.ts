// prisma/seed/poultry.ts
export const poultry = [
  {
    name: 'Chicken',
    description: 'A domesticated bird kept for its eggs and meat.',
    price: 5.99,
    sku: 'sku_chicken',
    published: true,
  },
  {
    name: 'Turkey',
    description:
      'A large bird native to North America, popular for Thanksgiving.',
    price: 12.99,
    sku: 'sku_turkey',
    published: true,
  },
  {
    name: 'Duck',
    description:
      'A waterbird with a broad blunt bill, short legs, and webbed feet.',
    price: 10.49,
    sku: 'sku_duck',
    published: true,
  },
  {
    name: 'Goose',
    description:
      'A large waterbird with a long neck, short legs, and webbed feet.',
    price: 15.99,
    sku: 'sku_goose',
    published: false,
  },
  {
    name: 'Quail',
    description: 'A small game bird with a plump body and small head.',
    price: 6.49,
    sku: 'sku_quail',
    published: true,
  },
];
