const InvoiceData = [
  {
    id: 'RT3080',
    createdAt: '2021-08-18',
    paymentDue: '2021-08-19',
    description: 'Re-branding',
    paymentTerms: 1,
    clientName: 'Jensen Huang',
    clientEmail: 'jensenh@mail.com',
    status: 'paid',

    senderAddressStreet: '19 Union Terrace',
    senderAddressCity: 'London',
    senderAddressPostCode: 'E1 3EZ',
    senderAddressCountry: 'United Kingdom',

    clientAddressStreet: '106 Kendell Street',
    clientAddressCity: 'Sharrington',
    clientAddressPostCode: 'NR24 5WQ',
    clientAddressCountry: 'United Kingdom',

    itemsName: 'Brand Guidelines',
    itemsQty: 1,
    itemsPrice: 1800.9,
    itemsTotal: 1800.9,

    total: 1800.9,
  },
  {
    id: 'XM9141',
    createdAt: '2021-08-21',
    paymentDue: '2021-09-20',
    description: 'Graphic Design',
    paymentTerms: 30,
    clientName: 'Alex Grim',
    clientEmail: 'alexgrim@mail.com',
    status: 'pending',

    senderAddressStreet: '19 Union Terrace',
    senderAddressCity: 'London',
    senderAddressPostCode: 'E1 3EZ',
    senderAddressCountry: 'United Kingdom',

    clientAddressStreet: '84 Church Way',
    clientAddressCity: 'Bradford',
    clientAddressPostCode: 'BD1 9PB',
    clientAddressCountry: 'United Kingdom',

    itemsName: 'Banner Design',
    itemsQty: 1,
    itemsPrice: 156.0,
    itemsTotal: 156.0,

    // itemsName: 'Email Design',
    // itemsQty: 2,
    // itemsPrice: 200.0,
    // itemsTotal: 400.0,

    total: 156.0,
  },
  {
    id: 'RG0314',
    createdAt: '2021-09-24',
    paymentDue: '2021-10-01',
    description: 'Website Redesign',
    paymentTerms: 7,
    clientName: 'John Morrison',
    clientEmail: 'jm@myco.com',
    status: 'paid',

    senderAddressStreet: '19 Union Terrace',
    senderAddressCity: 'London',
    senderAddressPostCode: 'E1 3EZ',
    senderAddressCountry: 'United Kingdom',

    clientAddressStreet: '79 Dover Road',
    clientAddressCity: 'Westhall',
    clientAddressPostCode: 'IP19 3PF',
    clientAddressCountry: 'United Kingdom',

    itemsName: 'Website Redesign',
    itemsQty: 1,
    itemsPrice: 14002.33,
    itemsTotal: 14002.33,

    total: 14002.33,
  },
  {
    id: 'RT2080',
    createdAt: '2021-10-11',
    paymentDue: '2021-10-12',
    description: 'Logo Concept',
    paymentTerms: 1,
    clientName: 'Alysa Werner',
    clientEmail: 'alysa@email.co.uk',
    status: 'pending',

    senderAddressStreet: '19 Union Terrace',
    senderAddressCity: 'London',
    senderAddressPostCode: 'E1 3EZ',
    senderAddressCountry: 'United Kingdom',

    clientAddressStreet: '63 Warwick Road',
    clientAddressCity: 'Carlisle',
    clientAddressPostCode: 'CA20 2TG',
    clientAddressCountry: 'United Kingdom',

    itemsName: 'Logo Sketches',
    itemsQty: 1,
    itemsPrice: 102.04,
    itemsTotal: 102.04,

    total: 102.04,
  },
  {
    id: 'AA1449',
    createdAt: '2021-10-7',
    paymentDue: '2021-10-14',
    description: 'Re-branding',
    paymentTerms: 7,
    clientName: 'Mellisa Clarke',
    clientEmail: 'mellisa.clarke@example.com',
    status: 'pending',

    senderAddressStreet: '19 Union Terrace',
    senderAddressCity: 'London',
    senderAddressPostCode: 'E1 3EZ',
    senderAddressCountry: 'United Kingdom',

    clientAddressStreet: '46 Abbey Row',
    clientAddressCity: 'Cambridge',
    clientAddressPostCode: 'CB5 6EG',
    clientAddressCountry: 'United Kingdom',

    itemsName: 'New Logo',
    itemsQty: 1,
    itemsPrice: 1532.33,
    itemsTotal: 1532.33,

    // itemsName: 'Brand Guidelines',
    // itemsQty: 1,
    // itemsPrice: 2500.0,
    // itemsTotal: 2500.0,

    total: 1532.33,
  },
  {
    id: 'TY9141',
    createdAt: '2021-10-01',
    paymentDue: '2021-10-31',
    description: 'Landing Page Design',
    paymentTerms: 30,
    clientName: 'Thomas Wayne',
    clientEmail: 'thomas@dc.com',
    status: 'pending',

    senderAddressStreet: '19 Union Terrace',
    senderAddressCity: 'London',
    senderAddressPostCode: 'E1 3EZ',
    senderAddressCountry: 'United Kingdom',

    clientAddressStreet: '3964  Queens Lane',
    clientAddressCity: 'Gotham',
    clientAddressPostCode: '60457',
    clientAddressCountry: 'United States of America',

    itemsName: 'Web Design',
    itemsQty: 1,
    itemsPrice: 6155.91,
    itemsTotal: 6155.91,

    total: 6155.91,
  },
  {
    id: 'FV2353',
    createdAt: '2021-11-05',
    paymentDue: '2021-11-12',
    description: 'Logo Re-design',
    paymentTerms: 7,
    clientName: 'Anita Wainwright',
    clientEmail: '',
    status: 'draft',

    senderAddressStreet: '19 Union Terrace',
    senderAddressCity: 'London',
    senderAddressPostCode: 'E1 3EZ',
    senderAddressCountry: 'United Kingdom',

    clientAddressStreet: '',
    clientAddressCity: '',
    clientAddressPostCode: '',
    clientAddressCountry: '',

    itemsName: 'Logo Re-design',
    itemsQty: 1,
    itemsPrice: 3102.04,
    itemsTotal: 3102.04,

    total: 3102.04,
  },
];

export default InvoiceData;
