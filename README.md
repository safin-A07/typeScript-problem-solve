1. type : একটি type দিয়ে  primitive, union, tuple, object, function সবকিছুই define করতে পারব ।

interface : একটি interface মূলত একটি object-এর structure বা shape নির্ধারণ করতে ব্যবহৃত হয়।


2.keyof TypeScript-এ একটি type operator। এটি object type-এর সব key-এর union type তৈরি করতে ব্যবহার হয়।

উদাহারন ঃ type Person = {
  name: string;
  age: number;
  city: string;
};

// keyof ব্যবহার
type PersonKeys = keyof Person; 