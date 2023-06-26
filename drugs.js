const drugs = [
  {
    drug_id: 1,
    name: "Paracetamol",
    description:
      "Paracetamol is a commonly used pain reliever and fever reducer.",
    price: 50,
    package: "Strip of 10 tablets",
    count: 100,
  },
  {
    drug_id: 2,
    name: "Amoxicillin",
    description:
      "Amoxicillin is an antibiotic used to treat various bacterial infections.",
    price: 150,
    package: "Bottle of 100 capsules",
    count: 50,
  },
  {
    drug_id: 3,
    name: "Ibuprofen",
    description:
      "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, reduce inflammation, and lower fever.",
    price: 80,
    package: "Bottle of 30 tablets",
    count: 75,
  },
  {
    drug_id: 4,
    name: "Ciprofloxacin",
    description:
      "Ciprofloxacin is an antibiotic used to treat a wide range of bacterial infections.",
    price: 200,
    package: "Strip of 5 tablets",
    count: 30,
  },
  {
    drug_id: 5,
    name: "Loratadine",
    description:
      "Loratadine is an antihistamine used to relieve allergy symptoms such as runny nose, sneezing, and itchy or watery eyes.",
    price: 120,
    package: "Bottle of 20 tablets",
    count: 60,
  },
  {
    drug_id: 6,
    name: "Omeprazole",
    description:
      "Omeprazole is a proton pump inhibitor (PPI) used to reduce stomach acid and treat conditions like heartburn, gastric ulcers, and gastroesophageal reflux disease (GERD).",
    price: 90,
    package: "Bottle of 14 capsules",
    count: 40,
  },
  {
    drug_id: 7,
    name: "Aspirin",
    description:
      "Aspirin is a common pain reliever and anti-inflammatory drug that also has blood-thinning properties.",
    price: 60,
    package: "Bottle of 30 tablets",
    count: 100,
  },
  {
    drug_id: 8,
    name: "Metformin",
    description:
      "Metformin is an oral medication used to control blood sugar levels in individuals with type 2 diabetes.",
    price: 70,
    package: "Bottle of 60 tablets",
    count: 90,
  },
  {
    drug_id: 9,
    name: "Amlodipine",
    description:
      "Amlodipine is a calcium channel blocker used to treat high blood pressure and chest pain (angina).",
    price: 100,
    package: "Bottle of 30 tablets",
    count: 70,
  },
  {
    drug_id: 10,
    name: "Salbutamol",
    description:
      "Salbutamol is a bronchodilator that helps relax and open up the airways, making it easier to breathe. It is commonly used to treat asthma and other respiratory conditions.",
    price: 130,
    package: "Inhaler with 200 doses",
    count: 25,
  },
  {
    drug_id: 11,
    name: "Cetirizine",
    description:
      "Cetirizine is an antihistamine used to relieve allergy symptoms such as sneezing, itching, watery eyes, and runny nose.",
    price: 55,
    package: "Bottle of 10 tablets",
    count: 120,
  },
  {
    drug_id: 12,
    name: "Simvastatin",
    description:
      "Simvastatin is a statin medication used to lower cholesterol levels and reduce the risk of heart disease.",
    price: 180,
    package: "Bottle of 30 tablets",
    count: 60,
  },
  {
    drug_id: 13,
    name: "Diazepam",
    description:
      "Diazepam is a benzodiazepine medication used to treat anxiety disorders, muscle spasms, and seizures.",
    price: 220,
    package: "Bottle of 20 tablets",
    count: 35,
  },
  {
    drug_id: 14,
    name: "Metronidazole",
    description:
      "Metronidazole is an antibiotic used to treat infections caused by bacteria and certain parasites.",
    price: 75,
    package: "Bottle of 30 tablets",
    count: 80,
  },
  {
    drug_id: 15,
    name: "Ranitidine",
    description:
      "Ranitidine is an H2 blocker used to reduce stomach acid production and treat conditions like heartburn, acid reflux, and stomach ulcers.",
    price: 95,
    package: "Bottle of 28 tablets",
    count: 55,
  },
  {
    drug_id: 16,
    name: "Atenolol",
    description:
      "Atenolol is a beta-blocker medication used to treat high blood pressure and prevent chest pain (angina).",
    price: 80,
    package: "Bottle of 30 tablets",
    count: 70,
  },
  {
    drug_id: 17,
    name: "Lisinopril",
    description:
      "Lisinopril is an ACE inhibitor used to treat high blood pressure and heart failure.",
    price: 110,
    package: "Bottle of 30 tablets",
    count: 65,
  },
  {
    drug_id: 18,
    name: "Furosemide",
    description:
      "Furosemide is a diuretic (water pill) used to treat fluid retention (edema) and high blood pressure.",
    price: 70,
    package: "Bottle of 30 tablets",
    count: 85,
  },
  {
    drug_id: 19,
    name: "Metronidazole Gel",
    description:
      "Metronidazole gel is a topical medication used to treat bacterial skin infections, such as rosacea.",
    price: 150,
    package: "Tube of 30g gel",
    count: 40,
  },
  {
    drug_id: 20,
    name: "Hydrochlorothiazide",
    description:
      "Hydrochlorothiazide is a thiazide diuretic used to treat fluid retention (edema) and high blood pressure.",
    price: 90,
    package: "Bottle of 30 tablets",
    count: 75,
  },
  {
    drug_id: 21,
    name: "Fluconazole",
    description:
      "Fluconazole is an antifungal medication used to treat fungal infections, including yeast infections in the mouth, throat, and vagina.",
    price: 130,
    package: "Bottle of 2 capsules",
    count: 30,
  },
  {
    drug_id: 22,
    name: "Naproxen",
    description:
      "Naproxen is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, reduce inflammation, and treat fever.",
    price: 85,
    package: "Bottle of 20 tablets",
    count: 90,
  },
  {
    drug_id: 23,
    name: "Sildenafil",
    description:
      "Sildenafil is a medication used to treat erectile dysfunction (impotence) in men.",
    price: 200,
    package: "Bottle of 4 tablets",
    count: 25,
  },
  {
    drug_id: 24,
    name: "Pantoprazole",
    description:
      "Pantoprazole is a proton pump inhibitor (PPI) used to reduce stomach acid and treat conditions like heartburn, gastroesophageal reflux disease (GERD), and stomach ulcers.",
    price: 110,
    package: "Bottle of 30 tablets",
    count: 60,
  },
  {
    drug_id: 25,
    name: "Diclofenac",
    description:
      "Diclofenac is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, reduce inflammation, and treat various musculoskeletal conditions.",
    price: 70,
    package: "Bottle of 30 tablets",
    count: 80,
  },
  {
    drug_id: 26,
    name: "Levofloxacin",
    description:
      "Levofloxacin is an antibiotic used to treat bacterial infections of the respiratory tract, urinary tract, skin, and other body parts.",
    price: 180,
    package: "Strip of 5 tablets",
    count: 35,
  },
  {
    drug_id: 27,
    name: "Losartan",
    description:
      "Losartan is an angiotensin receptor blocker (ARB) used to treat high blood pressure and prevent stroke and heart attack in individuals with heart conditions.",
    price: 120,
    package: "Bottle of 30 tablets",
    count: 50,
  },
  {
    drug_id: 28,
    name: "Tamsulosin",
    description:
      "Tamsulosin is an alpha-blocker used to treat symptoms of an enlarged prostate (benign prostatic hyperplasia, BPH) such as difficulty urinating and frequent urination.",
    price: 100,
    package: "Bottle of 30 capsules",
    count: 60,
  },
  {
    drug_id: 29,
    name: "Methotrexate",
    description:
      "Methotrexate is a chemotherapy drug used to treat certain types of cancer, as well as autoimmune diseases like rheumatoid arthritis and psoriasis.",
    price: 250,
    package: "Bottle of 10 tablets",
    count: 20,
  },
  {
    drug_id: 30,
    name: "Warfarin",
    description:
      "Warfarin is an anticoagulant medication used to prevent blood clots and reduce the risk of stroke, heart attack, and other clot-related conditions.",
    price: 95,
    package: "Bottle of 100 tablets",
    count: 45,
  },
];

drugs.forEach((drug) => {
  conn.query(
    `INSERT INTO drugs(name,description,price,package,count) VALUES('${drug.name}','${drug.description}',${drug.price},'${drug.package}',${drug.count})`
  );
});
