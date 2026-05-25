export interface ContentSection {
  heading: string;
  body: string;
  codeExample?: string;
  tips?: string;
}

export interface SessionContent {
  intro: string;
  sections: ContentSection[];
  summary: string[];
}

const sessionContents: Record<string, SessionContent> = {
  "1-1": {
    intro: "DevOps itu bukan sekadar tools atau jabatan — ini adalah cara berpikir dan budaya kerja yang mengubah total bagaimana software dibuat dan dijalankan. Tanpa memahami ini, kamu bakal bingung kenapa perusahaan teknologi besar bisa deploy ratusan kali sehari tanpa error.",
    sections: [
      {
        heading: "Sejarah Singkat — Kenapa DevOps Lahir?",
        body: "Sebelum DevOps ada, tim developer (yang bikin aplikasi) dan tim operations (yang menjalankan server) itu terpisah. Developer bikin kode, lempar ke Ops, selesai. Masalahnya? Kode yang jalan di laptop developer seringkali error di server. Dua tim saling lempar kesalahan.\n\nLalu muncullah gerakan DevOps sekitar tahun 2009, dipopulerkan oleh Patrick Debois. Idenya sederhana: gabungkan Development dan Operations jadi satu kesatuan. Bukan lagi \"itu masalah lu\", tapi \"ini masalah kita bareng-bareng\".",
        codeExample: "# Analogi sederhana\n# Dulu: Developer kasih kode, Ops pasang, error -> saling tunjuk\n# Sekarang: Developer + Ops kerja bareng dari awal, semua tanggung jawab bersama",
        tips: "Ingat: DevOps adalah culture dan mindset dulu, baru tools. Jangan terbalik — banyak yang langsung belajar Docker/Kubernetes tanpa paham kenapa alat-alat itu diciptakan.",
      },
      {
        heading: "Apa Itu DevOps? Definisi Sederhana",
        body: "DevOps adalah gabungan dari Development (Dev) dan Operations (Ops). Tapi lebih dari itu, DevOps adalah:\n\n1. Sebuah budaya kolaborasi antara tim developer dan tim operasi\n2. Praktik otomasi untuk mempercepat delivery software\n3. Pendekatan yang fokus pada continuous improvement dan feedback loop\n\nIbaratnya begini: bayangkan restoran. Dulu, chef masak di dapur (developer), waiter antar ke pelanggan (operations). Kalau makanan dingin pas sampai, siapa yang salah? Dengan DevOps, chef dan waiter kerja di dapur yang sama, komunikasi langsung, dan makanan sampai panas ke pelanggan.",
        tips: "DevOps bukan jabatan. \"DevOps Engineer\" itu sebenarnya software/system engineer yang paham dan menerapkan praktik DevOps. Kamu bisa jadi developer yang paham DevOps, atau sysadmin yang paham DevOps.",
      },
      {
        heading: "Kenapa DevOps Penting untuk Kamu?",
        body: "Sekarang semua perusahaan tech mengadopsi DevOps. Alasannya:\n\n1. Deployment jadi lebih cepat — dari yang tadinya sebulan sekali jadi bisa berkali-kali sehari\n2. Recovery dari error lebih cepat — kalau ada bug di production, bisa di-fix dan deploy ulang dalam hitungan menit\n3. Kualitas software meningkat — karena testing dan monitoring diotomasi\n4. Tim lebih bahagia — nggak ada lagi lempar-lemparan kesalahan\n\nBuat kamu yang baru belajar: DevOps adalah skill yang akan membuat kamu sangat dicari di dunia kerja.",
      },
    ],
    summary: [
      "DevOps adalah budaya kolaborasi antara Development dan Operations, bukan sekadar tools",
      "Lahir sekitar 2009 sebagai solusi dari masalah miskomunikasi antar tim tech",
      "Tujuan utama: delivery software lebih cepat, stabil, dan berkualitas",
      "DevOps adalah mindset, bukan jabatan — siapa pun bisa menerapkannya",
    ],
  },
  "1-2": {
    intro: "Pernah nggak sih kamu denger cerita: \"di laptopku jalan kok, di server kenapa error?\" Itu masalah klasik yang jadi pemicu lahirnya DevOps. Di sesi ini kita akan lihat perbedaan cara kerja era lama (Traditional IT) vs DevOps, dan kenapa transisi ini penting banget buat kamu pahami.",
    sections: [
      {
        heading: "Traditional IT — Waterfall & Silo Mentality",
        body: "Di era tradisional, software development pakai model Waterfall. Ini ibaratnya kamu bikin rumah — semua harus direncanain dulu 100%, baru dibangun, baru dicek hasilnya.\n\nMasalahnya:\n1. Developer dan Operations kerja di silo (terpisah), nggak ada komunikasi\n2. Kalau ada perubahan di tengah jalan, proyek bisa berantakan\n3. Deployment jarang (sebulan sekali atau lebih), jadi kalau ada error, dampaknya besar\n4. Testing dilakukan di akhir, jadi bug ketemu belakangan\n5. Feedback loop lambat — user baru bisa kasih masukan setelah semuanya jadi\n\nTim Developer cuma peduli \"kode jalan di laptop\", tim Ops cuma peduli \"server stabil\". Dan di antara keduanya ada jurang yang disebut \"wall of confusion\".",
        tips: "Waterfall masih dipakai di beberapa industri yang sangat regulated (misal penerbangan, kesehatan). Tapi untuk software modern, pendekatan ini terlalu lambat.",
      },
      {
        heading: "DevOps Way — Agile, Automation, Collaboration",
        body: "Cara DevOps itu kebalikannya:\n\n1. Agile development: software dipecah jadi bagian-bagian kecil, di-develop bertahap, setiap tahap bisa langsung di-test dan di-deploy\n2. Silo dihancurkan: Developer dan Ops kerja bareng dari tahap perencanaan sampai production\n3. Deployment sering dan kecil: daripada deploy besar sebulan sekali, deploy kecil-kecilan 10x sehari\n4. Testing dari awal: setiap perubahan kode langsung di-test otomatis\n5. Feedback loop cepat: user bisa kasih masukan dan perbaikan bisa deploy dalam hitungan jam\n\nBayangkan: daripada ngecat satu rumah besar sekaligus (risiko warna salah, harus ngulang), lebih baik cat satu ruangan dulu, lihat hasilnya, perbaiki kalau perlu, baru lanjut ruangan berikutnya.",
      },
      {
        heading: "Perbandingan Langsung",
        body: "Dimensi | Traditional IT | DevOps\nRelease cycle | Bulanan/Tahunan | Harian/Jam-an\nTim struktur | Silo (Dev vs Ops) | Cross-functional\nTesting | Di akhir | Sepanjang proses\nFeedback | Lambat | Cepat\nRisk | Besar per release | Kecil per release\nCulture | Saling lempar | Tanggung jawab bersama\nAutomation | Manual | Otomatis (CI/CD)",
        tips: "Tidak semua perusahaan langsung bisa loncat ke DevOps. Banyak yang mulai dari fase transisi: pertama bikin tim DevOps kecil, lalu perlahan-lahan transformasi seluruh kultur.",
      },
    ],
    summary: [
      "Traditional IT: silo mentality, release lambat, feedback lama, risiko besar",
      "DevOps: kolaborasi, release cepat & kecil, testing kontinu, feedback instan",
      "Perubahan utama ada di mindset — bukan tools, bukan struktur organisasi",
      "Transisi dari Traditional ke DevOps butuh waktu, bertahap, dan dimulai dari kultur",
    ],
  },
  "1-3": {
    intro: "DevOps itu lebih dari sekadar belajar Docker atau Jenkins. Ada 5 pilar yang jadi fondasi budaya DevOps — namanya CALMS: Collaboration, Automation, Lean, Measurement, Sharing. Kalau kamu paham 5 ini, kamu udah mengerti esensi DevOps sebenarnya.",
    sections: [
      {
        heading: "C — Collaboration (Kolaborasi)",
        body: "Ini inti dari DevOps. Developer dan Operations nggak bisa lagi kerja sendiri-sendiri. Mereka harus duduk bareng dari awal: ngomongin arsitektur, environment, deployment strategy.\n\nContoh nyata: saat developer bikin fitur baru, mereka harus ngomong ke Ops: \"ini butuh database baru, resource-nya segini, cara deploy-nya begini.\" Ops balas: \"aman, resource cukup, tapi kita perlu tambah monitoring di sini.\"\n\nHasilnya? Nggak ada lagi kode yang \"jalan di laptop developer tapi error di production\" — karena semua udah dipikirin bareng dari awal.",
      },
      {
        heading: "A — Automation (Otomasi)",
        body: "Setelah kolaborasi jalan, otomasi adalah langkah selanjutnya. Semua yang bisa diotomasi, harus diotomasi:\n\n1. Build otomatis: setiap commit kode, aplikasi di-build\n2. Test otomatis: setelah build, langsung jalanin unit test, integration test\n3. Deploy otomatis: kalau test lolos, langsung deploy ke staging/production\n4. Monitoring otomatis: server di-monitor 24/7, alert kalau ada masalah\n\nTujuannya? Mengurangi human error dan mempercepat siklus development. Kalau ada yang manual, itu titik rawan kesalahan manusia.",
        tips: "Mulai dari yang paling repetitif dulu. Kalau kamu ngerjain sesuatu yang sama 3x sehari, itu kandidat kuat buat diotomasi.",
      },
      {
        heading: "L — Lean (Efisien)",
        body: "Prinsip Lean: buang semua yang nggak memberi nilai tambah. Dalam konteks DevOps:\n\n1. Jangan bikin fitur yang belum dibutuhkan (YAGNI — You Ain't Gonna Need It)\n2. Kurangi handoff (lempar-lemparan tugas antar tim)\n3. Identifikasi bottleneck di pipeline dan perbaiki\n4. Buat batch size kecil — deploy sedikit-sedikit, bukan banyak sekaligus\n\nDengan Lean, tim bisa deliver value lebih cepat ke user. Ingat: value adalah apa yang user rasakan, bukan apa yang kita anggap keren.",
      },
      {
        heading: "M — Measurement (Pengukuran)",
        body: "\"You can't improve what you don't measure.\" Di DevOps, kamu harus ngukur SEMUA:\n\n1. Deployment frequency: seberapa sering deploy ke production?\n2. Lead time: dari commit sampai production berapa lama?\n3. Mean Time to Recovery (MTTR): kalau error, butuh berapa lama buat fix?\n4. Change failure rate: berapa persen deploy yang gagal?\n\nMetrik ini disebut DORA Metrics — standar industri buat mengukur maturity DevOps sebuah organisasi. Perusahaan elite bisa deploy berkali-kali sehari dengan failure rate di bawah 15%.",
        tips: "Jangan langsung ukur semua. Mulai dari 1-2 metrik yang paling relevan. Yang penting: ukur, analisis, perbaiki, ulangi.",
      },
      {
        heading: "S — Sharing (Berbagi)",
        body: "Knowledge sharing adalah kunci. Di DevOps, informasi nggak boleh numpuk di satu orang. Caranya:\n\n1. Dokumentasi yang baik — arsitektur, deployment, incident report, semua ditulis\n2. Blameless postmortem — kalau ada error, fokusnya ke \"apa yang bisa diperbaiki\" bukan \"siapa yang salah\"\n3. Cross-training — developer belajar operasi, ops belajar development\n4. Brown bag session — sharing pengetahuan rutin antar tim\n\nDengan sharing, tim jadi resilient. Kalau satu orang cuti atau resign, yang lain tetap bisa jalan.",
      },
    ],
    summary: [
      "CALMS = Collaboration, Automation, Lean, Measurement, Sharing — 5 pilar DevOps",
      "Collaboration: putus silo, kerja bareng dari awal sampai production",
      "Automation: otomasi build, test, deploy, monitoring — kurangi human error",
      "Lean: buang yang nggak perlu, deliver value cepat, batch kecil",
      "Measurement: ukur DORA metrics (frequency, lead time, MTTR, failure rate)",
      "Sharing: dokumentasi, postmortem, cross-training — jangan jadi single point of failure",
    ],
  },
  "1-4": {
    intro: "Aplikasi itu nggak langsung jadi begitu saja. Ada siklus hidupnya — dari ide sampai jalan di production. Siklus ini namanya SDLC (Software Development Lifecycle). Paham SDLC itu penting karena DevOps nempel erat di setiap tahapannya. Tanpa paham alurnya, kamu bakal bingung: CI/CD itu nempel di tahap mana?",
    sections: [
      {
        heading: "7 Tahap SDLC Modern",
        body: "1. Plan — Tahap perencanaan. Fitur apa yang akan dibuat? Timeline berapa? Resource apa yang dibutuhkan?\n\n2. Code — Developer mulai nulis kode. Di tahap ini, version control (Git) udah harus jalan.\n\n3. Build — Kode di-compile/di-bundle jadi aplikasi yang siap dijalankan. Di sinilah CI pipeline mulai bekerja.\n\n4. Test — Aplikasi diuji: unit test, integration test, end-to-end test. Kalau ada yang gagal, pipeline berhenti.\n\n5. Release — Aplikasi siap di-deploy. Dibuat artifact (misal Docker image) yang konsisten di semua environment.\n\n6. Deploy — Aplikasi dipasang di server. Bisa manual atau otomatis (CD pipeline).\n\n7. Operate & Monitor — Aplikasi jalan di production. Di-monitor performanya, log-nya, error-nya.",
        tips: "Setiap tahap ini bisa diotomasi. Semakin banyak yang otomatis, semakin cepat kamu bisa deliver value ke user.",
      },
      {
        heading: "Di Mana DevOps Berperan?",
        body: "DevOps bukan cuma di tahap Deploy ya! DevOps hadir di SEMUA tahap:\n\n- Plan → Ops ikut diskusi arsitektur, estimasi resource\n- Code → Developer pakai git, branching strategy, code review\n- Build → CI pipeline build otomatis setiap push\n- Test → Automated testing, static analysis, security scanning\n- Release → Artifact repository, versioning, changelog\n- Deploy → CD pipeline, blue-green deploy, canary release\n- Operate → Monitoring, logging, alerting, incident response\n\nJadi DevOps itu end-to-end, dari kode pertama nongol sampai aplikasi hidup di server.",
      },
      {
        heading: "Continuous Integration & Continuous Delivery (CI/CD)",
        body: "CI/CD adalah jantung dari SDLC modern. Bayangkan seperti ban berjalan di pabrik:\n\nCI (Continuous Integration): setiap developer push kode, otomatis:\n- Kode di-build\n- Test dijalankan\n- Kalau gagal, developer langsung dikasih tahu\n\nCD (Continuous Delivery/Deployment): setelah lolos CI, otomatis:\n- Aplikasi di-deploy ke staging\n- Kalau semua aman, deploy ke production\n- User langsung bisa pakai fitur baru\n\nDengan CI/CD, nggak ada lagi drama \"deployment day\" yang bikin begadang. Semua berjalan otomatis dan aman.",
        tips: "CI/CD ini yang akan kita bahas detail di Fase 4 nanti. Untuk sekarang, cukup paham konsepnya dulu.",
      },
    ],
    summary: [
      "SDLC = 7 tahap: Plan → Code → Build → Test → Release → Deploy → Operate",
      "DevOps terlibat di SELURUH tahap SDLC, bukan cuma deploy",
      "CI/CD adalah jantung otomasi — build, test, deploy semuanya otomatis",
      "Tujuan akhir: deliver software berkualitas ke user secepat mungkin",
    ],
  },
  "1-5": {
    intro: "Linux itu sistem operasi yang jadi 'rumah' bagi hampir semua server di dunia. 90%+ server cloud, container, dan production environment berjalan di Linux. Kalau kamu mau serius di DevOps, skill Linux dasar itu WAJIB. Tenang — kita mulai dari nol.",
    sections: [
      {
        heading: "Navigasi Terminal — Rumah Kedua DevOps Engineer",
        body: "Terminal adalah cara kamu berinteraksi dengan Linux tanpa mouse (CLI — Command Line Interface). Ini skill dasar yang paling penting:\n\n1. pwd — Print Working Directory, nunjukin kamu di folder mana sekarang\n2. ls — List, lihat isi folder\n3. cd — Change Directory, pindah folder\n4. mkdir — Make Directory, bikin folder baru\n5. touch — Bikin file kosong\n6. cp — Copy file/folder\n7. mv — Move/rename file/folder\n8. rm — Remove, hapus file/folder (hati-hati, permanen!)",
        codeExample: "# Navigasi dasar Linux\npwd                    # /home/rayhan\nls -la                 # lihat semua file termasuk hidden\ncd /var/log            # pindah ke folder log\nmkdir project-devops   # bikin folder baru\ncd project-devops\nmkdir app config data  # bikin 3 folder sekaligus\ntouch README.md         # bikin file kosong\nls\n# output: app/ config/ data/ README.md",
        tips: "Gunakan TAB untuk auto-complete. Kalau setengah jalan ngetik nama folder, tekan TAB, shell akan melengkapi otomatis. Ini saving banyak waktu!",
      },
      {
        heading: "File System Linux — Pohon Terbalik",
        body: "File system Linux itu kayak pohon terbalik. Root (/) ada di paling atas, lalu bercabang ke bawah:\n\n/ (root) - folder paling atas, isi semuanya\n├── /bin - program-program esensial (ls, cp, mv, dll)\n├── /etc - file konfigurasi sistem\n├── /home - folder user-user\n│   └── /home/rayhan - folder kamu sendiri\n├── /var - log files, database, cache\n│   └── /var/log - file log penting!\n├── /tmp - file sementara, dihapus saat reboot\n├── /usr - aplikasi user\n└── /opt - software tambahan (custom)\n\nNggak perlu hafal semua. Yang penting kamu tahu: /etc untuk config, /var/log untuk troubleshooting, /home untuk file pribadi.",
      },
      {
        heading: "Permission — Siapa yang Boleh Baca, Tulis, Eksekusi?",
        body: "Setiap file/folder di Linux punya permission yang mengatur siapa boleh apa:\n\nr (read) = 4 — boleh lihat isi\nw (write) = 2 — boleh edit\nx (execute) = 1 — boleh eksekusi (untuk program/script) atau masuk folder\n\nPermission ditulis dalam 3 kelompok: Owner - Group - Others.\nContoh: chmod 755 file.sh artinya:\n- Owner (7 = 4+2+1): boleh baca, tulis, eksekusi\n- Group (5 = 4+1): boleh baca dan eksekusi\n- Others (5 = 4+1): boleh baca dan eksekusi",
        codeExample: "# Permission di Linux\nls -la\n# -rw-r--r-- 1 rayhan devops 1024 Mei 23 10:00 README.md\n#  ^^^^^^^^^^^\n#  permission: owner rw-, group r--, others r--\n\nchmod 755 script.sh     # bikin script bisa dieksekusi\nchmod 600 secret.key    # hanya owner yang bisa baca/tulis\nchown rayhan:devops file.txt  # ganti owner dan group",
      },
      {
        heading: "Text Editor di Terminal — nano vs vim",
        body: "Kadang kamu perlu edit file config langsung di server. Ada 2 pilihan editor:\n\nnano — mudah untuk pemula. Buka, edit, Ctrl+X keluar, Y untuk simpan. Selesai.\nvim — powerful tapi kurva belajarnya curam. Untuk DevOps engineer, investasi waktu belajar vim sangat worth it.\n\nUntuk sekarang, pakai nano dulu. Nanti kalau udah nyaman, pelan-pelan pindah ke vim.",
        codeExample: "# Edit file pakai nano\nnano app.conf\n# Edit isinya\n# Ctrl+X -> Y -> Enter (simpan & keluar)\n\n# Lihat isi file tanpa edit\ncat app.conf        # tampilkan seluruh isi\nless app.conf       # scroll halaman per halaman\ntail -f app.log     # lihat baris akhir + live update (berguna banget buat monitoring!)",
        tips: "tail -f adalah command favorit DevOps engineer. Kalau ada masalah di server, buka log pakai tail -f, lalu pinggirin aja terminal-nya. Semua error baru akan muncul real-time.",
      },
    ],
    summary: [
      "Terminal (CLI) adalah senjata utama DevOps engineer — kuasai navigasi dasar (ls, cd, pwd, cp, mv, rm)",
      "File system Linux seperti pohon terbalik: /etc untuk config, /var/log untuk log, /home untuk file user",
      "Permission rwx menentukan siapa boleh baca (4), tulis (2), eksekusi (1)",
      "nano untuk editor pemula, vim kalau sudah mahir",
      "tail -f untuk monitoring log real-time — command paling berguna",
    ],
  },
  "1-6": {
    intro: "Aplikasi itu harus bisa ngobrol satu sama lain lewat jaringan. Di sesi ini kamu akan paham dasar-dasar networking yang WAJIB diketahui DevOps engineer: IP, DNS, HTTP, Port, dan Firewall. Ini fondasi sebelum belajar Docker networking dan Kubernetes.",
    sections: [
      {
        heading: "IP Address — Alamat Rumah di Internet",
        body: "Setiap perangkat yang terkoneksi ke jaringan punya alamat IP. Ibaratnya, IP adalah alamat rumah di dunia digital.\n\nAda 2 versi IP:\nIPv4: 192.168.1.1 (32-bit, 4 kelompok angka)\nIPv6: 2001:db8::1 (128-bit, lebih panjang)\n\nJenis-jenis IP:\n- Public IP: alamat yang dipakai di internet, unik seluruh dunia\n- Private IP: alamat lokal di jaringan internal (192.168.x.x, 10.x.x.x, 172.16-31.x.x)\n- Localhost: 127.0.0.1 — alamat untuk \"diri sendiri\", selalu mengarah ke perangkat kamu sendiri\n\nDi DevOps: kamu akan sering lihat private IP saat setting Docker network atau Kubernetes cluster.",
        codeExample: "# Cek IP di Linux\nip addr show          # lihat semua IP\ncurl ifconfig.me      # lihat public IP\nping 8.8.8.8          # cek koneksi ke Google DNS",
      },
      {
        heading: "DNS — Buku Telepon Internet",
        body: "Mengingat IP address itu susah. Coba bayangin harus ketik 142.250.80.46 setiap kali mau buka Google. Untungnya ada DNS (Domain Name System) yang menerjemahkan nama domain ke IP.\n\nCara kerjanya:\n1. Kamu ketik google.com di browser\n2. Komputer tanya ke DNS server: \"IP-nya google.com apa?\"\n3. DNS server jawab: \"142.250.80.46\"\n4. Browser konek ke IP itu\n\nDi DevOps: kamu akan sering ngurusin DNS untuk domain aplikasi, subdomain, dan internal service discovery di Kubernetes.",
        tips: "Kalau aplikasi nggak bisa diakses, cek DNS dulu. Bisa pakai nslookup atau dig untuk debug masalah DNS.",
      },
      {
        heading: "HTTP/HTTPS — Protokol Komunikasi Web",
        body: "HTTP (HyperText Transfer Protocol) adalah bahasa yang dipakai browser dan server untuk ngobrol. Setiap kali kamu buka website, terjadi request-response:\n\nBrowser: \"GET /halaman HTTP/1.1\" (minta halaman)\nServer: \"HTTP/1.1 200 OK\" + isi halaman (ngasih)\n\nKode status yang penting diketahui:\n- 200 OK: sukses\n- 301/302: redirect\n- 403 Forbidden: akses ditolak\n- 404 Not Found: halaman nggak ada\n- 500 Internal Server Error: server error\n\nHTTPS = HTTP + SSL/TLS (enkripsi). Semua data di-enkripsi biar nggak bisa disadap di tengah jalan. Di DevOps, kamu wajib setup HTTPS (Certbot/Let's Encrypt) di setiap production server.",
      },
      {
        heading: "Port & Firewall — Pintu Masuk Server",
        body: "Port itu seperti nomor pintu di sebuah gedung (server). Layanan yang berbeda pakai port berbeda:\n\n- 22: SSH (remote access)\n- 80: HTTP (web)\n- 443: HTTPS (web aman)\n- 3306: MySQL\n- 5432: PostgreSQL\n- 6379: Redis\n- 8080/3000/5000: aplikasi development\n\nFirewall berfungsi seperti satpam yang jaga pintu — dia menentukan port mana yang boleh dibuka dan dari IP mana saja yang boleh akses.",
        codeExample: "# Cek port yang lagi dipakai\nnetstat -tulpn          # daftar service yang listen\nss -tulpn               # alternatif, lebih cepat\n\n# Test port terbuka atau tidak\ntelnet google.com 80     # cek port 80\nnc -zv localhost 3306    # cek MySQL jalan atau tidak\n\n# Firewall (UFW di Ubuntu)\nufw status               # lihat status\nufw allow 80/tcp         # buka port HTTP\nufw deny 22              # tutup SSH (hati-hati!)",
        tips: "Jangan pernah buka port database (3306, 5432) ke internet publik tanpa proteksi! Itu undangan buat hacker.",
      },
    ],
    summary: [
      "IP = alamat perangkat di jaringan. Ada public, private, localhost (127.0.0.1)",
      "DNS = menerjemahkan nama domain → IP address, seperti buku telepon internet",
      "HTTP/HTTPS = protokol komunikasi web. HTTPS wajib untuk production (enkripsi)",
      "Port = nomor pintu layanan (22=SSH, 80=HTTP, 443=HTTPS, 3306=MySQL, dll)",
      "Firewall = satpam server, tentukan port mana yang boleh dibuka",
    ],
  },
  "1-7": {
    intro: "Git adalah version control system yang dipakai oleh HAMPIR SEMUA developer dan DevOps engineer di dunia. Git melacak semua perubahan kode, memungkinkan kolaborasi tanpa chaos, dan jadi fondasi untuk CI/CD pipeline. Tanpa Git, DevOps nggak mungkin jalan.",
    sections: [
      {
        heading: "Kenapa Butuh Version Control?",
        body: "Bayangkan kamu nulis dokumen penting. Setiap kali revisi, kamu save as: dokumen_v1.doc, dokumen_v2.doc, dokumen_final.doc, dokumen_final_beneran.doc... Kacau, kan?\n\nGit menyelesaikan masalah ini. Setiap perubahan dicatat sebagai commit — seperti checkpoint di game. Kamu bisa:\n1. Lihat history semua perubahan\n2. Balik ke versi sebelumnya kalau ada bug\n3. Kerja bareng banyak orang tanpa tabrakan\n4. Bikin cabang (branch) untuk eksperimen, lalu gabungin (merge) kalau sukses",
      },
      {
        heading: "Konsep Dasar Git",
        body: "Ada 4 area di Git:\n\n1. Working Directory — folder project kamu yang lagi diedit\n2. Staging Area (git add) — tempat nyiapin file yang mau di-commit\n3. Local Repository (git commit) — penyimpanan history di laptop kamu\n4. Remote Repository (git push) — penyimpanan di server (GitHub/GitLab)\n\nAlur kerja standar:\ngit add → git commit → git push\n\nIni ibaratnya: pilih barang (add), packing ke kardus (commit), kirim ke gudang (push).",
        codeExample: "# Alur kerja Git sehari-hari\ngit init                     # bikin repo baru\ngit status                   # cek file yang berubah\ngit add app.py               # tambah ke staging\ngit add .                    # tambah SEMUA file yang berubah\ngit commit -m \"fix: bug login\"  # commit dengan pesan\ngit push origin main         # kirim ke GitHub\n\n# Lihat history\ngit log --oneline            # ringkasan commit\ngit log --oneline --graph    # lihat branch graph",
      },
      {
        heading: "Branch & Merge — Fitur Paling Kuat Git",
        body: "Branch itu seperti jalan cabang. Kamu bikin branch terpisah untuk ngerjain fitur baru, sementara branch utama (main/master) tetap stabil.\n\nAlur standar (GitHub Flow):\n1. Bikin branch baru: git checkout -b fitur-login\n2. Kerjakan fitur, commit-commit\n3. Push branch ke GitHub: git push origin fitur-login\n4. Bikin Pull Request (PR) untuk minta review\n5. Setelah disetujui, merge ke main\n6. Hapus branch fitur\n\nIni mencegah kode setengah jadi masuk ke production.",
        codeExample: "# Belajar branch\nmain ─────●────●────●  (kode stabil)\n                 \\\nfitur-x           ●────●  (eksperimen)\n\ngit branch                   # lihat semua branch\ngit checkout -b fitur-baru   # bikin + pindah branch\ngit checkout main            # balik ke main\ngit merge fitur-baru         # gabungin branch ke main\ngit branch -d fitur-baru     # hapus branch (setelah merge)",
        tips: "Pesan commit itu penting! Jangan cuma tulis 'update' atau 'fix'. Pakai format: jenis: deskripsi singkat. Contoh: feat: tambah halaman login, fix: perbaiki bug validasi email.",
      },
    ],
    summary: [
      "Git = version control, melacak semua perubahan kode seperti checkpoint",
      "4 area: Working Directory → Staging (add) → Local Repo (commit) → Remote (push)",
      "Branch = cabang untuk eksperimen fitur, merge = gabungin ke kode utama",
      "Pull Request (PR) = minta review sebelum merge, standar di industri",
      "Pesan commit yang baik: jenis: deskripsi (feat:, fix:, docs:)",
    ],
  },
  "1-8": {
    intro: "Selamat! Kamu udah sampai di sesi terakhir Fase 1. Sekarang waktunya menguji pemahaman kamu tentang semua materi yang udah dipelajari. Kuis ini terdiri dari 10 soal pilihan ganda tentang konsep DevOps, 5 soal praktik Linux & Git, dan 3 soal esai singkat.",
    sections: [
      {
        heading: "Persiapan Sebelum Kuis",
        body: "Sebelum mulai kuis, pastikan kamu udah review materi-materi berikut:\n\n1. Definisi DevOps dan kenapa lahir (Sesi 1.1)\n2. Perbedaan DevOps vs Traditional IT (Sesi 1.2)\n3. 5 pilar CALMS (Sesi 1.3)\n4. 7 tahap SDLC (Sesi 1.4)\n5. Perintah dasar Linux (Sesi 1.5)\n6. Konsep IP, DNS, HTTP, Port (Sesi 1.6)\n7. Git: commit, branch, merge (Sesi 1.7)\n\nKuis bisa diulang kalau skor kamu di bawah 60. Target: minimal 80 untuk bisa lanjut ke Fase 2!",
        tips: "Jawab yang kamu yakin dulu, skip yang ragu-ragu, balik lagi nanti. Dan ingat: kuis ini bukan ujian hidup mati — ini alat bantu untuk memastikan kamu benar-benar paham sebelum lanjut.",
      },
      {
        heading: "Format Kuis",
        body: "Bagian A — Pilihan Ganda (10 soal)\nMateri: Konsep DevOps, kultur, mindset\nWaktu: 15 menit\n\nBagian B — Praktik (5 soal)\nMateri: Perintah dasar Linux dan Git\nWaktu: 20 menit\n\nBagian C — Esai Singkat (3 soal)\nContoh: \"Jelaskan dengan kata-katamu sendiri, apa itu CI/CD?\"\nWaktu: 15 menit\n\nSkor minimum kelulusan: 80\n\nKamu bisa mulai kuis kapan saja. Ambil napas dulu, siapkan terminal Linux untuk soal praktik. Good luck! 🚀",
      },
    ],
    summary: [
      "Review semua materi Fase 1 sebelum mulai kuis",
      "Bagian A: 10 soal pilihan ganda (konsep DevOps)",
      "Bagian B: 5 soal praktik (Linux & Git command)",
      "Bagian C: 3 soal esai singkat (CI/CD, DevOps culture, dll)",
      "Target skor: > 80 untuk lulus, < 60 perlu review ulang",
      "Kuis bisa diulang, yang penting kamu paham materinya!",
    ],
  },
};

export function getSessionContent(
  phaseId: number,
  sessionId: number
): SessionContent | null {
  const key = `${phaseId}-${sessionId}`;
  return sessionContents[key] ?? null;
}
