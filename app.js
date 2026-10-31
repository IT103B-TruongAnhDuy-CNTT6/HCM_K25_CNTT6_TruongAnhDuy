// Mã đề 003
let students = [
  {
    studentCode: "STU-001",
    fullName: "Đặng Gia Huy",
    courseName: "Tiếng Anh Giao Tiếp",
    age: 19,
    placementScore: 65,
  },
  {
    studentCode: "STU-002",
    fullName: "Phan Ngọc Lan",
    courseName: "Tiếng Anh Học Thuật",
    age: 24,
    placementScore: 72,
  },
  {
    studentCode: "STU-003",
    fullName: "Trương Bảo Ngọc",
    courseName: "Tiếng Anh Thiếu Nhi",
    age: 9,
    placementScore: 40,
  },
];

function validateStudentCode(code) {
  if (
    code === "" ||
    !code.includes("STU-") ||
    code.length() < 6 ||
    code.includes(" ")
  ) {
    code = prompt("Nhập sai! Nhập lại: ");
    return code;
  }
}

function findStudentIndex(code) {
  return students.findIndex((student) => student.studentCode === code);
}

function normalizeText(rawText) {}

function inputIntegerInRange(message, min, max) {}

function displayStudents(list) {
  list.forEach((student, index) => {
    console.log(`${index + 1}. ${student.studentCode} - ${student.fullName} - ${student.courseName}
    Tuổi: ${student.age} | Điểm đầu vào: ${student.placementScore}`);
  });
}

function showStudentList() {
  if (students.length === 0) {
    console.log("Danh sách học viên trống!");
    return;
  }
  displayStudents(students);
  console.log(`Tổng: ${students.length} học viên`);
}

function addStudent() {
  let studentCode = validateStudentCode("Nhập mã học viên: ")
    .trim()
    .toUpperCase();
  if (findStudentIndex(studentCode) !== -1) {
    console.log(`Mã học viên ${studentCode} đã tồn tại!`);
    return;
  }
  let fullName = prompt("Nhập họ và tên học viên: ").trim();
  let courseName = prompt("Nhập tên khóa học: ").trim();
  let age = parseInt(prompt("Nhập tuổi học viên: ").trim());
  let placementScore = parseFloat(prompt("Nhập điểm đầu vào: ").trim());

  students.push({
    studentCode,
    fullName,
    courseName,
    age,
    placementScore,
  });
  console.log(`${students.length}. ${studentCode} - ${fullName} - ${courseName}
    Tuổi: ${age} | Điểm đầu vào: ${placementScore}`);
}

function updateStudent() {
  let code = validateStudentCode("Nhập mã học viên cần cập nhật: ")
    .trim()
    .toUpperCase();
  let index = findStudentIndex(code);
  if (index === -1) {
    console.log(`Không tìm thấy học viên có mã ${code}`);
    return;
  }
  let oldAge = students[index].age;
  let oldPlacementScore = students[index].placementScore;
  let newAge = parseInt(prompt("Nhập tuổi học viên: ").trim());
  let newPlacementScore = parseFloat(prompt("Nhập điểm đầu vào: ").trim());

  students[index] = {
    studentCode: code,
    fullName: students[index].fullName,
    courseName: students[index].courseName,
    age: newAge,
    placementScore: newPlacementScore,
  };
  console.log(`
Tuổi cũ: ${oldAge} | Điểm đầu vào cũ: ${oldPlacementScore}
Tuổi mới: ${newAge} | Điểm đầu vào mới: ${newPlacementScore}`);
}

function deleteStudent() {
  let code = validateStudentCode("Nhập mã học viên cần xóa: ")
    .trim()
    .toUpperCase();
  let index = findStudentIndex(code);
  if (index === -1) {
    console.log(`Không tìm thấy học viên có mã ${code}`);
    return;
  }
  let confirm = prompt(
    `Bạn có chắc chắn muốn xóa học viên ${students[index].fullName}? (Y/N)`,
  )
    .trim()
    .toUpperCase();
  if (confirm !== "Y") {
    console.log("Đã hủy thao tác xóa");
    return;
  }
  students.splice(index, 1);
  console.log(`Số học viên còn lại: ${students.length}`);
}

function searchStudentsByCourse() {
  let keyWord = prompt("Nhập tên khóa học: ").trim().toLowerCase();
  if (keyWord === "" || keyWord === null) {
    console.log("Chưa nhập từ khoá tìm kiếm");
    return;
  }
  let filteredStudents = students.filter((student) =>
    student.courseName.toLowerCase().includes(keyWord),
  );
  if (filteredStudents.length === 0) {
    console.log(`Không tìm thấy học viên phù hợp`);
    return;
  }
  displayStudents(filteredStudents);
}

function main() {
  while (true) {
    let choice = prompt(`
===================================
HỆ THỐNG QUẢN LÝ HỌC VIÊN TRUNG TÂM GLOBAL ENGLISH
===================================
1. Hiển thị danh sách học viên
2. Thêm học viên mới
3. Cập nhật thông tin học viên
4. Xóa học viên
5. Tìm kiếm học viên theo khóa học
0. Thoát chương trình
===================================
Vui lòng nhập lựa chọn của bạn (0-5): `).trim();
    switch (choice) {
      case "1":
        showStudentList();
        break;

      case "2":
        addStudent();
        break;

      case "3":
        updateStudent();
        break;

      case "4":
        deleteStudent();
        break;

      case "5":
        searchStudentsByCourse();
        break;

      case "0":
        console.log("Thoát chương trình!");
        return;

      default:
        console.log("Lựa chọn không hợp lệ!");
        break;
    }
  }
}
main();
