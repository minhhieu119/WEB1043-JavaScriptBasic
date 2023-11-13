function nguoi(ten, tuoi, diaChi, ngheNghiep, mucLuong){
        this.ten = ten;
        this.tuoi = tuoi;
        this.diaChi = diaChi;
        this.ngheNghiep = ngheNghiep;
        this.mucLuong = mucLuong;
}
var nguoi1 = [];
nguoi1[0] = new nguoi('Hieu', 26, 'Hà Nội', 'Sinh viên', 10);
nguoi1[1] = new nguoi('Hao', 25, 'Bắc Giang', 'Sinh viên', 20);
nguoi1[2] = new nguoi('Quỳnh', 29, 'Hà Nam', 'Sinh viên', 30);

for(let x in nguoi1){
    if(nguoi1[x].diaChi === 'Hà Nội'){
        console.log(nguoi1[x]);
    }
}

var sum = 0;
for(let i in nguoi1){
    sum += nguoi1[i].mucLuong;
}
console.log(sum);