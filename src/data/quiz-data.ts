export interface QuizQuestion {
  id: string;
  type: "multiple_choice" | "true_false" | "essay" | "fill_blank" | "troubleshooting";
  question: string;
  options?: string[];
  correctAnswer?: string | string[];
  explanation?: string;
  codeSnippet?: string;
}

export interface QuizData {
  phaseId: number;
  sessionId: number;
  title: string;
  passingScore: number;
  questions: QuizQuestion[];
}

const quizData: Record<string, QuizData> = {
  "1-1": {
    phaseId: 1,
    sessionId: 1,
    title: "Kuis: Apa itu DevOps?",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        type: "multiple_choice",
        question: "Apa kepanjangan dari DevOps?",
        options: ["Development Operations", "Device Operations", "Developer Options", "Deviation Operations"],
        correctAnswer: "Development Operations",
        explanation: "DevOps adalah singkatan dari Development (Dev) dan Operations (Ops) — dua tim yang dulu terpisah, sekarang digabung.",
      },
      {
        id: "q2",
        type: "multiple_choice",
        question: "Siapa yang mempopulerkan gerakan DevOps sekitar tahun 2009?",
        options: ["Linus Torvalds", "Patrick Debois", "Jeff Bezos", "Mark Zuckerberg"],
        correctAnswer: "Patrick Debois",
        explanation: "Patrick Debois adalah 'Godfather of DevOps' yang mengorganisir konferensi DevOpsDays pertama di Belgia tahun 2009.",
      },
      {
        id: "q3",
        type: "multiple_choice",
        question: "Sebelum DevOps, masalah utama antara tim Developer dan Operations adalah:",
        options: [
          "Kekurangan server",
          "Komunikasi yang buruk dan saling lempar kesalahan",
          "Kode yang terlalu sedikit",
          "Budget terlalu besar",
        ],
        correctAnswer: "Komunikasi yang buruk dan saling lempar kesalahan",
        explanation: "Silot mentality menyebabkan dua tim tidak berkomunikasi. Developer lempar kode, Ops deploy, kalau error — saling tunjuk.",
      },
      {
        id: "q4",
        type: "true_false",
        question: "DevOps adalah sebuah jabatan (job title) di perusahaan teknologi.",
        correctAnswer: "false",
        explanation: "DevOps adalah budaya dan mindset, bukan jabatan. Ada 'DevOps Engineer' sebagai peran, tapi DevOps sendiri lebih dari sekadar title.",
      },
      {
        id: "q5",
        type: "multiple_choice",
        question: "Apa manfaat utama dari penerapan DevOps?",
        options: [
          "Server jadi lebih murah",
          "Deployment lebih cepat, stabil, dan berkualitas",
          "Tidak perlu tim operations lagi",
          "Kode otomatis sempurna tanpa bug",
        ],
        correctAnswer: "Deployment lebih cepat, stabil, dan berkualitas",
        explanation: "DevOps mempercepat delivery, meningkatkan stabilitas, dan menjaga kualitas melalui otomasi dan kolaborasi.",
      },
      {
        id: "q6",
        type: "essay",
        question: "Jelaskan dengan kata-katamu sendiri: kenapa DevOps itu penting dalam software development modern?",
      },
    ],
  },
  "1-3": {
    phaseId: 1,
    sessionId: 3,
    title: "Kuis: DevOps Culture (CALMS)",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        type: "multiple_choice",
        question: "Apa kepanjangan dari C dalam CALMS?",
        options: ["Coding", "Collaboration", "Containerization", "Continuous"],
        correctAnswer: "Collaboration",
        explanation: "C = Collaboration — kolaborasi antara Development dan Operations dari awal sampai production.",
      },
      {
        id: "q2",
        type: "multiple_choice",
        question: "Apa arti A dalam CALMS?",
        options: ["Agile", "Automation", "Architecture", "API"],
        correctAnswer: "Automation",
        explanation: "A = Automation — semua yang repetitif harus diotomasi: build, test, deploy, monitoring.",
      },
      {
        id: "q3",
        type: "multiple_choice",
        question: "L dalam CALMS berarti Lean. Apa maksudnya dalam konteks DevOps?",
        options: [
          "Menggunakan server yang lebih kecil",
          "Membuang yang tidak memberi nilai tambah, deliver value dengan cepat",
          "Bekerja lebih sedikit",
          "Mengurangi jumlah developer",
        ],
        correctAnswer: "Membuang yang tidak memberi nilai tambah, deliver value dengan cepat",
        explanation: "Lean fokus pada efisiensi — buang waste, batch kecil, deliver value cepat ke user.",
      },
      {
        id: "q4",
        type: "true_false",
        question: "Blameless postmortem termasuk dalam pilar Sharing (S) karena fokusnya pada perbaikan, bukan menyalahkan orang.",
        correctAnswer: "true",
        explanation: "Sharing mencakup dokumentasi, knowledge sharing, dan blameless postmortem — semua berfokus pada pembelajaran.",
      },
      {
        id: "q5",
        type: "fill_blank",
        question: "Lengkapi: 'You can't improve what you don't _____' — prinsip dari pilar M (Measurement).",
        correctAnswer: "measure",
        explanation: "Measurement adalah pilar M di CALMS. Mengukur adalah langkah pertama untuk bisa memperbaiki.",
      },
      {
        id: "q6",
        type: "essay",
        question: "Dari kelima pilar CALMS, menurutmu mana yang PALING penting untuk pemula seperti kamu? Jelaskan alasannya.",
      },
    ],
  },
  "1-5": {
    phaseId: 1,
    sessionId: 5,
    title: "Kuis: Pengenalan Linux untuk DevOps",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        type: "multiple_choice",
        question: "Perintah Linux untuk melihat isi folder saat ini adalah:",
        options: ["cd", "pwd", "ls", "mkdir"],
        correctAnswer: "ls",
        explanation: "ls (list) menampilkan isi folder. cd untuk pindah, pwd untuk lihat posisi, mkdir untuk buat folder.",
      },
      {
        id: "q2",
        type: "multiple_choice",
        question: "Folder mana yang berisi file log di Linux?",
        options: ["/home", "/etc", "/var/log", "/tmp"],
        correctAnswer: "/var/log",
        explanation: "/var/log adalah tempat semua log file disimpan. Ini folder paling sering dicek DevOps engineer saat troubleshooting.",
      },
      {
        id: "q3",
        type: "fill_blank",
        question: "Lengkapi perintah untuk melihat isi file log secara real-time: tail ___ app.log",
        correctAnswer: "-f",
        explanation: "tail -f (follow) menampilkan akhir file dan terus update saat ada baris baru. Command wajib DevOps engineer.",
      },
      {
        id: "q4",
        type: "multiple_choice",
        question: "Permission 755 pada file artinya:",
        options: [
          "Owner: rwx, Group: r-x, Others: r-x",
          "Owner: rwx, Group: rwx, Others: rwx",
          "Owner: r--, Group: r--, Others: r--",
          "Owner: rw-, Group: r--, Others: ---",
        ],
        correctAnswer: "Owner: rwx, Group: r-x, Others: r-x",
        explanation: "7 = rwx (4+2+1), 5 = r-x (4+1), 5 = r-x (4+1). Jadi owner bisa baca/tulis/eksekusi, group dan others bisa baca & eksekusi.",
      },
      {
        id: "q5",
        type: "troubleshooting",
        question: "Kamu menjalankan `./deploy.sh` tapi muncul error 'Permission denied'. Apa penyebabnya dan bagaimana cara memperbaikinya?",
        codeSnippet: "$ ./deploy.sh\n-bash: ./deploy.sh: Permission denied",
        correctAnswer: "chmod +x deploy.sh",
        explanation: "File belum punya execute permission. Solusi: chmod +x deploy.sh untuk menambahkan execute permission, atau chmod 755 deploy.sh.",
      },
    ],
  },
  "1-7": {
    phaseId: 1,
    sessionId: 7,
    title: "Kuis: Version Control dengan Git",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        type: "multiple_choice",
        question: "Perintah untuk menyimpan perubahan ke local repository adalah:",
        options: ["git save", "git push", "git commit", "git store"],
        correctAnswer: "git commit",
        explanation: "git commit menyimpan perubahan ke local repository. git push mengirim ke remote (GitHub).",
      },
      {
        id: "q2",
        type: "multiple_choice",
        question: "Apa fungsi dari git branch?",
        options: [
          "Menghapus file dari repository",
          "Membuat cabang terpisah untuk eksperimen atau fitur baru",
          "Menggabungkan dua repository",
          "Mengubah nama file",
        ],
        correctAnswer: "Membuat cabang terpisah untuk eksperimen atau fitur baru",
        explanation: "Branch memungkinkan kamu bekerja di fitur baru tanpa mengganggu kode utama (main). Setelah jadi, merge kembali.",
      },
      {
        id: "q3",
        type: "fill_blank",
        question: "Lengkapi alur kerja Git yang benar: git add → git _____ → git push",
        correctAnswer: "commit",
        explanation: "Alur standar: git add (staging), git commit (simpan ke local), git push (kirim ke remote).",
      },
      {
        id: "q4",
        type: "true_false",
        question: "Pull Request (PR) digunakan untuk minta review sebelum kode di-merge ke branch utama.",
        correctAnswer: "true",
        explanation: "PR adalah mekanisme code review standar di GitHub/GitLab. Kode diperiksa dulu sebelum digabung ke main.",
      },
      {
        id: "q5",
        type: "troubleshooting",
        question: "Kamu sudah commit beberapa kali, lalu sadar commit terakhir punya pesan yang salah: 'update'. Bagaimana cara mengubah pesan commit terakhir?",
        codeSnippet: "$ git log --oneline\nabc1234 update\ndef5678 feat: tambah halaman login",
        correctAnswer: "git commit --amend -m \"pesan baru\"",
        explanation: "git commit --amend memungkinkan kamu mengubah pesan commit terakhir. Tapi hati-hati: jangan amend commit yang sudah di-push ke shared branch.",
      },
      {
        id: "q6",
        type: "essay",
        question: "Kenapa pesan commit seperti 'fix', 'update', atau 'wip' dianggap buruk? Bagaimana format pesan commit yang baik?",
      },
    ],
  },
};

export function getQuiz(phaseId: number, sessionId: number): QuizData | null {
  const key = `${phaseId}-${sessionId}`;
  return quizData[key] ?? null;
}
