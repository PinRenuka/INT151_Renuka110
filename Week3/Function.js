// Self-study 24/8/2568
/*ให้เขียน function ที่แสดงผลลัพธ์ดังภาพ ตาม size ที่รับเข้ามาได้ 
(ความกว้าง ความยาว มีค่าเท่ากัน ดังในตัวอย่างนี้ size = 9) */
function draw(size) {
  const odd = size % 2;
  const maxIndex = size - odd;
  const midIndex = maxIndex / 2;

  for (let y = 0; y < size; y++) {
    let line = '';
    for (let x = 0; x < size; x++) {
      if (
        y == midIndex                       // mid-horizontal line
        || x == midIndex                    // mid-vertical line
        || (x + y) % maxIndex == midIndex   // Q1,Q4 diagonal line
        || Math.abs(x - y) == midIndex      // Q2,Q3 diagonal line
      ) {
        line += '0';
      } else {
        line += '_';
      }
    }
    console.log(line);
  }
}

console.log(draw(9))