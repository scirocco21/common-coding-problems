import XXH from 'xxhashjs';

const h1 = string => Math.abs(XXH.h32(0xABCD).update(string).digest().toNumber() % 100);
const h2 = string => Math.abs(XXH.h32(0x1234).update(string).digest().toNumber() % 100);
const h3 = string => Math.abs(XXH.h32(0x6789).update(string).digest().toNumber() % 100);

class BloomFilter{
  constructor() {
    this.data = Array(100).fill(0);
  }
  add(string) {
    this.data[h1(string)] = 1;
    this.data[h2(string)] = 1;
    this.data[h3(string)] = 1;
  }
  // contains might return a false positive but will always return true negative
  contains(string) {
    return this.data[h1(string)] && this.data[h2(string)] && this.data[h3(string)]
  }
}