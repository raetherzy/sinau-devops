
🚀
SinauDevOps
Platform Pembelajaran DevOps Berbasis AI
Product Requirements Document (PRD)
Versi	1.0.0
Tanggal	Mei 2025
Status	Draft Awal

From Zero to Hero — Belajar DevOps dengan Bantuan AI
 
1. Ringkasan Eksekutif
SinauDevOps adalah platform pembelajaran DevOps berbasis web yang dirancang khusus sebagai media belajar mandiri (self-learning). Platform ini menggunakan kecerdasan buatan (AI) sebagai "tutor virtual" yang menyajikan materi secara interaktif, mudah dipahami, dan disesuaikan dengan progress belajar pengguna.

Tujuan utama platform ini adalah membawa seseorang dari level pemula yang belum tahu apa-apa tentang DevOps hingga mencapai level mahir yang mampu mengimplementasikan praktik DevOps secara nyata di lingkungan kerja atau proyek pribadi.

🎯 Visi: Menjadi platform belajar DevOps dalam Bahasa Indonesia yang paling mudah dipahami, didukung penuh oleh AI, sehingga siapa pun bisa belajar DevOps dari nol hingga mahir secara mandiri.

2. Latar Belakang & Masalah yang Diselesaikan
2.1 Masalah yang Ada
•	Materi DevOps di internet umumnya tersebar, tidak terstruktur, dan sering kali langsung terlalu teknis
•	Kebanyakan sumber berbahasa Inggris sehingga menjadi hambatan bagi pelajar yang lebih nyaman dengan Bahasa Indonesia
•	Tidak ada panduan learning path yang jelas dari nol hingga mahir
•	Kurang ada mekanisme evaluasi diri yang membantu pelajar mengukur pemahaman mereka
•	Belajar sendiri sering kali terasa monoton dan tidak ada "teman" yang bisa menjelaskan ulang konsep yang belum dipahami

2.2 Solusi yang Ditawarkan SinauDevOps
•	Learning path yang jelas dan terstruktur dari Dasar → Menengah → Mahir
•	Materi disajikan oleh AI dengan bahasa yang santai namun tetap akurat, seperti belajar dari mentor pribadi
•	Kuis interaktif di setiap sesi untuk menguji pemahaman secara berkala
•	Progress tracking sehingga pengguna tahu sudah sampai mana perjalanan belajarnya
•	Penjelasan yang bisa diulang, diperdalam, atau dipercepat sesuai kebutuhan pengguna

3. Target Pengguna

Segmen Pengguna	Deskripsi
Pemula Absolut	Seseorang yang baru pertama kali mendengar istilah DevOps dan ingin memahami konsepnya dari nol
Developer Aktif	Developer yang sudah bisa coding tapi ingin memahami pipeline, CI/CD, dan deployment
Sysadmin / IT Ops	Tim operasional yang ingin memahami DevOps culture dan alat-alat modern seperti Docker & K8s
Mahasiswa IT	Mahasiswa yang ingin membekali diri sebelum masuk dunia kerja
Belajar Mandiri	Pengguna (termasuk pembuat project ini) yang ingin belajar secara self-paced tanpa terikat jadwal

📌 Primary User: Pembuat project ini sendiri — yang ingin belajar DevOps dari nol hingga mahir secara mandiri, terstruktur, dan menyenangkan dengan bantuan AI.

 
4. Prinsip Desain Pembelajaran
Agar platform ini benar-benar efektif sebagai alat belajar, SinauDevOps mengadopsi beberapa prinsip pedagogik berikut:

4.1 Bahasa Mudah & Ramah
Setiap materi ditulis dengan gaya bahasa percakapan — seperti mentor yang menjelaskan kepada teman, bukan buku teks formal. Analogi dan contoh sehari-hari digunakan untuk menjelaskan konsep teknis yang abstrak.

✍️ Contoh Gaya Bahasa: Daripada menulis "Containerization adalah teknik virtualisasi berbasis OS...", SinauDevOps akan menulis "Bayangkan kamu punya aplikasi yang butuh lingkungan khusus untuk jalan. Docker itu seperti kotak bekal makan siang — semua yang dibutuhkan aplikasimu sudah ada di dalamnya, dan bisa kamu bawa ke mana saja!"

4.2 Spiral Learning
Konsep yang sama akan muncul berulang kali di level berbeda. Pertama diperkenalkan secara sederhana, lalu semakin dalam seiring progress belajar. Ini membantu memori jangka panjang.

4.3 Active Recall dengan Kuis
Setiap sesi diakhiri dengan kuis yang mendorong pengguna untuk mengingat kembali apa yang baru dipelajari. Ini adalah teknik belajar yang terbukti secara ilmiah lebih efektif dibanding hanya membaca ulang.

4.4 Bite-sized Content
Setiap sesi dirancang tidak lebih dari 15-20 menit waktu belajar. Materi dipecah menjadi unit-unit kecil yang mudah dicerna, sehingga tidak overwhelming bagi pelajar.

4.5 Praktik Langsung
Di setiap topik, disertakan contoh perintah, konfigurasi, atau skenario nyata yang bisa langsung dicoba. Belajar dengan melakukan jauh lebih efektif daripada sekadar membaca teori.

5. Fitur Utama Platform

Fitur	Deskripsi
AI Tutor	AI menyajikan materi dalam bahasa natural, menjawab pertanyaan, dan memberikan penjelasan tambahan jika diminta
Learning Path	Jalur belajar terstruktur dengan indikator progress yang jelas per fase dan per sesi
Kuis Interaktif	Kuis pilihan ganda dan esai singkat di setiap akhir sesi untuk menguji pemahaman
Progress Tracker	Dashboard visual yang menampilkan sesi yang sudah selesai, skor kuis, dan estimasi waktu tersisa
Catatan Pribadi	Fitur untuk menyimpan catatan dari setiap sesi belajar
Recap Otomatis	Ringkasan materi yang sudah dipelajari, bisa diakses kapan saja untuk review cepat
Contoh Praktis	Setiap sesi dilengkapi contoh perintah CLI, konfigurasi, atau diagram arsitektur
Mode Tanya AI	Pengguna bisa bertanya langsung ke AI tentang topik apapun yang berkaitan dengan sesi saat ini

 
6. Learning Path Lengkap DevOps
Learning path SinauDevOps dibagi menjadi 3 tingkatan utama yang masing-masing mencakup beberapa modul. Total keseluruhan mencakup 7 fase pengembangan konten.

🗺️ Struktur Keseluruhan: Dasar → Fondasi Teknis → Tools Inti → Automation → Orkestrasi → Observability → Expert Level

FASE 1	Pondasi DevOps — Konsep & Mindset (Dasar)

Target: Memahami apa itu DevOps, kenapa penting, dan dasar-dasar lingkungan teknis yang dibutuhkan.

Sesi	Topik
Sesi 1.1	Apa itu DevOps? Sejarah, pengertian, dan kenapa DevOps lahir
Sesi 1.2	DevOps vs Traditional IT: Perbedaan cara kerja dan mindset
Sesi 1.3	DevOps Culture: Collaboration, Automation, Lean, Measurement, Sharing (CALMS)
Sesi 1.4	Software Development Lifecycle (SDLC) — Memahami alur kerja software
Sesi 1.5	Pengenalan Linux untuk DevOps: Navigasi terminal, file system, permission
Sesi 1.6	Dasar-dasar Networking: IP, DNS, HTTP/HTTPS, Port, Firewall
Sesi 1.7	Version Control dengan Git: Konsep, init, commit, branch, merge
Sesi 1.8	Kuis & Recap Fase 1

Output Kuis Fase 1:
•	10 soal pilihan ganda tentang konsep DevOps dan kultur
•	5 soal praktik tentang perintah dasar Linux dan Git
•	3 soal esai singkat: "Jelaskan dengan kata-katamu sendiri apa itu CI/CD?"

FASE 2	Fondasi Teknis — Linux, Scripting & Jaringan (Dasar-Menengah)

Target: Mahir menggunakan Linux, menulis script otomasi, dan memahami jaringan secara lebih mendalam.

Sesi	Topik
Sesi 2.1	Linux Lanjutan: Process management, systemd, cron job, log files
Sesi 2.2	Bash Scripting: Variabel, kondisi, loop, fungsi, dan error handling
Sesi 2.3	Package Management: apt, yum, snap — cara install & manage software
Sesi 2.4	SSH & Remote Access: Key-based auth, scp, rsync, tunneling
Sesi 2.5	Networking Lanjutan: Subnetting, Load Balancer, Reverse Proxy, VPN
Sesi 2.6	File Server & Protokol: FTP, SFTP, NFS, Samba
Sesi 2.7	Manajemen User & Permission: sudo, group, ACL, security hardening
Sesi 2.8	Kuis & Recap Fase 2

Output Kuis Fase 2:
•	Tugas: Buat bash script untuk backup folder secara otomatis dengan cron job
•	10 soal pilihan ganda tentang Linux dan networking
•	Praktik: Konfigurasi SSH key-based authentication

 
FASE 3	Containerization — Docker & Registry (Menengah)

Target: Memahami dan bisa menggunakan Docker untuk packaging, menjalankan, dan mendistribusikan aplikasi.

Sesi	Topik
Sesi 3.1	Apa itu Container? Perbedaan Container vs Virtual Machine
Sesi 3.2	Instalasi Docker & konsep dasar: Image, Container, Layer
Sesi 3.3	Docker CLI: pull, run, stop, rm, ps, exec, logs
Sesi 3.4	Dockerfile: Menulis Dockerfile dari nol untuk aplikasi nyata
Sesi 3.5	Docker Networking & Volume: Bridge, host, named volumes
Sesi 3.6	Docker Compose: Mendefinisikan multi-container app dalam satu file
Sesi 3.7	Docker Registry: Push & pull ke Docker Hub dan private registry
Sesi 3.8	Best Practice Docker: Image optimization, security scanning, .dockerignore
Sesi 3.9	Kuis & Recap Fase 3

Output Kuis Fase 3:
•	Tugas: Buat Dockerfile untuk aplikasi web sederhana (Node.js/Python) dan push ke Docker Hub
•	Tugas: Buat docker-compose.yml untuk app + database + reverse proxy
•	12 soal pilihan ganda tentang Docker

FASE 4	CI/CD Pipeline — Automation (Menengah)

Target: Bisa membuat pipeline otomatis untuk build, test, dan deploy aplikasi ke berbagai environment.

Sesi	Topik
Sesi 4.1	Apa itu CI/CD? Continuous Integration vs Continuous Delivery vs Deployment
Sesi 4.2	GitHub Actions: Workflow, Event, Job, Step, Runner
Sesi 4.3	Membuat Pipeline CI: Build dan test otomatis setiap push
Sesi 4.4	Membuat Pipeline CD: Deploy otomatis ke staging dan production
Sesi 4.5	GitLab CI/CD: .gitlab-ci.yml, stages, artifacts, environments
Sesi 4.6	Jenkins: Instalasi, Jenkinsfile, declarative pipeline
Sesi 4.7	Secret Management di Pipeline: Environment variables, vault secrets
Sesi 4.8	Testing dalam Pipeline: Unit test, integration test, static analysis (linting)
Sesi 4.9	Kuis & Recap Fase 4

Output Kuis Fase 4:
•	Tugas: Buat GitHub Actions workflow yang build Docker image → push ke registry → deploy ke server
•	10 soal tentang konsep CI/CD dan pipeline
•	Soal analisis: "Apa yang salah dari pipeline berikut ini?"

 
FASE 5	Infrastructure as Code & Cloud (Menengah-Mahir)

Target: Mampu mendefinisikan infrastruktur melalui kode dan mengelola resource cloud secara otomatis.

Sesi	Topik
Sesi 5.1	Apa itu Infrastructure as Code (IaC)? Prinsip dan manfaatnya
Sesi 5.2	Terraform Dasar: Provider, Resource, Variable, Output, State
Sesi 5.3	Terraform Lanjutan: Module, Remote State, Workspaces
Sesi 5.4	Ansible: Inventory, Playbook, Role, Task — Konfigurasi server otomatis
Sesi 5.5	Cloud Fundamental: AWS/GCP/Azure — Konsep region, AZ, VPC, IAM
Sesi 5.6	Compute di Cloud: EC2, Cloud Run, App Service — Cara deploy app
Sesi 5.7	Storage & Database Cloud: S3, RDS, Cloud SQL — Setup dan integrasi
Sesi 5.8	Networking Cloud: VPC, Subnet, Security Group, Load Balancer
Sesi 5.9	Kuis & Recap Fase 5

Output Kuis Fase 5:
•	Tugas: Buat Terraform script untuk provision VPC + EC2 instance + Security Group di AWS
•	Tugas: Buat Ansible playbook untuk install dan konfigurasi Nginx di server baru
•	12 soal tentang IaC dan Cloud fundamental

FASE 6	Kubernetes & Container Orchestration (Mahir)

Target: Memahami dan bisa mengelola container dalam skala besar menggunakan Kubernetes.

Sesi	Topik
Sesi 6.1	Apa itu Kubernetes? Kenapa butuh orchestrator setelah Docker?
Sesi 6.2	Arsitektur Kubernetes: Control Plane, Worker Node, etcd, kubelet
Sesi 6.3	Core Objects: Pod, Deployment, Service, Namespace, ConfigMap
Sesi 6.4	kubectl: Perintah-perintah penting untuk mengelola cluster
Sesi 6.5	Storage di K8s: PersistentVolume, PersistentVolumeClaim, StorageClass
Sesi 6.6	Networking K8s: Ingress, NetworkPolicy, Service Types
Sesi 6.7	Helm: Package manager untuk Kubernetes — install, upgrade, rollback
Sesi 6.8	Auto Scaling: HPA, VPA, Cluster Autoscaler
Sesi 6.9	Kubernetes Security: RBAC, Pod Security, Secret management
Sesi 6.10	Kuis & Recap Fase 6

Output Kuis Fase 6:
•	Tugas: Deploy aplikasi multi-tier (frontend + backend + database) ke Kubernetes
•	Tugas: Setup Ingress dengan SSL termination menggunakan cert-manager
•	15 soal tentang Kubernetes — konsep dan troubleshooting

 
FASE 7	Observability, Security & Expert Practices (Mahir)

Target: Mampu memonitoring sistem secara komprehensif, mengamankan infrastruktur, dan menerapkan best practice DevOps di production.

Sesi	Topik
Sesi 7.1	Observability vs Monitoring: 3 Pillars — Metrics, Logs, Traces
Sesi 7.2	Prometheus & Grafana: Scrape metrics, buat dashboard, alerting
Sesi 7.3	Log Management: ELK/EFK Stack, Loki, centralized logging
Sesi 7.4	Distributed Tracing: Jaeger, OpenTelemetry — Trace request antar service
Sesi 7.5	SRE Practices: SLO, SLI, SLA, Error Budget, blameless postmortem
Sesi 7.6	DevSecOps: Shift-left security, SAST, DAST, Container scanning
Sesi 7.7	GitOps: ArgoCD, FluxCD — Deploy dengan Git sebagai single source of truth
Sesi 7.8	Service Mesh: Istio/Linkerd — Traffic management, mTLS, observability
Sesi 7.9	Disaster Recovery: Backup strategy, RTO/RPO, chaos engineering
Sesi 7.10	Final Project & Kuis Akhir

Output Final Project & Kuis Fase 7:
•	Final Project: Bangun full DevOps pipeline dari kode sampai production dengan monitoring
•	Setup Prometheus + Grafana dashboard untuk Kubernetes cluster
•	Implementasi GitOps workflow dengan ArgoCD
•	20 soal final yang mencakup semua materi dari Fase 1-7

 
7. Desain Sistem Kuis
Setiap fase memiliki kuis yang dirancang untuk menguji pemahaman secara bertahap. Berikut adalah format kuis yang digunakan:

Tipe Soal	Deskripsi
Pilihan Ganda	Soal dengan 4 pilihan jawaban. Ada penjelasan mengapa jawaban benar/salah setelah submit.
True/False + Alasan	Pernyataan yang harus dinilai benar/salah, lalu pengguna diminta menjelaskan alasannya.
Esai Singkat	Pertanyaan terbuka yang dijawab dengan 2-3 kalimat. AI akan memberikan feedback.
Praktik/Latihan	Tugas hands-on yang harus diselesaikan, seperti menulis Dockerfile atau script.
Fill in the Blank	Melengkapi potongan kode atau konfigurasi yang sudah disediakan.
Troubleshooting	Diberikan skenario bermasalah, pengguna harus menemukan dan menjelaskan solusinya.

🏆 Sistem Penilaian: Skor < 60: Perlu review ulang materi | Skor 60-80: Lanjut dengan catatan | Skor > 80: Lulus sesi, lanjut ke berikutnya

8. Timeline Pengembangan
Berikut adalah estimasi waktu pengembangan untuk setiap fase:

Fase	Estimasi Durasi Pengembangan
Fase 0 — Setup & Infrastruktur Web	1 minggu
Fase 1 — Pondasi DevOps	2 minggu
Fase 2 — Fondasi Teknis Linux	2 minggu
Fase 3 — Docker & Containerization	2 minggu
Fase 4 — CI/CD Pipeline	2 minggu
Fase 5 — IaC & Cloud	3 minggu
Fase 6 — Kubernetes	3 minggu
Fase 7 — Observability & Expert	3 minggu
Total Estimasi	~18 minggu (4-5 bulan)

9. Tech Stack yang Direkomendasikan

Layer	Teknologi
Frontend	React.js / Next.js — UI modern, responsif, fast
Styling	Tailwind CSS — Cepat dan fleksibel untuk design
Backend	Node.js + Express atau Next.js API Routes
Database	PostgreSQL (data user, progress) + Redis (session, cache)
AI Engine	Anthropic Claude API (claude-sonnet-4-20250514) untuk materi & kuis
Auth	NextAuth.js atau Clerk — Login mudah dengan Google/GitHub
Hosting	Vercel (frontend) + Railway/Supabase (backend/DB)
Storage	Supabase Storage atau S3 — untuk file dan aset materi

 
10. Panduan AI Tutor
Berikut adalah prinsip-prinsip yang harus diterapkan saat merancang system prompt untuk AI Tutor dalam SinauDevOps:

10.1 Tone & Persona AI
•	Gunakan gaya bahasa santai seperti mentor yang sabar dan supportif
•	Hindari jargon teknis tanpa penjelasan — selalu sertakan analogi
•	Validasi kebingungan pengguna sebelum memberikan jawaban
•	Gunakan kata "kamu" bukan "Anda" untuk suasana yang lebih akrab

10.2 Struktur Penyajian Materi
1.	Mulai dengan hook: "Kenapa kamu perlu tahu ini?"
2.	Jelaskan konsep dengan analogi sederhana dari kehidupan sehari-hari
3.	Berikan contoh teknis yang konkret dan bisa langsung dicoba
4.	Ringkas poin-poin penting di akhir sesi
5.	Ajak pengguna untuk mencoba atau merefleksikan materi

💡 Contoh Prompt System AI Tutor: Kamu adalah mentor DevOps yang sabar dan supportif bernama "Sinau". Jelaskan konsep DevOps dengan bahasa Indonesia yang santai, gunakan analogi sehari-hari, dan selalu pastikan pengguna benar-benar paham sebelum lanjut ke topik berikutnya.

11. Kriteria Keberhasilan

Metrik	Target
Completion Rate per Fase	Pengguna menyelesaikan setidaknya 80% sesi dalam satu fase
Quiz Score Average	Rata-rata skor kuis > 70% di setiap fase
Engagement	Pengguna kembali belajar minimal 3x per minggu
Comprehension Check	Pengguna bisa menjelaskan konsep utama dengan kata-kata sendiri setelah tiap fase
Final Project	Pengguna berhasil menyelesaikan final project di Fase 7
Waktu Belajar	Rata-rata 30-60 menit per sesi aktif belajar

12. Risiko & Mitigasi

Risiko	Mitigasi
Materi terlalu teoritis	Setiap sesi wajib ada bagian "Coba Sendiri" dengan contoh praktis
Burnout belajar	Sesi dibagi kecil-kecil (15-20 menit), ada gamifikasi dan milestone
AI memberikan jawaban salah	Tambahkan fact-checking layer dan referensi ke dokumentasi resmi
Kehilangan progress belajar	Auto-save progress ke database, ada fitur resume dari tempat terakhir
Materi cepat outdated	Modular content design agar mudah diupdate per sesi tanpa ubah keseluruhan

 
13. Appendix — Glosarium Istilah DevOps
Berikut adalah istilah-istilah penting dalam DevOps yang akan sering muncul di platform ini:

Istilah	Penjelasan Singkat
CI/CD	Continuous Integration / Continuous Delivery — Proses otomasi build, test, deploy
Container	Paket berisi aplikasi dan semua dependensinya, berjalan terisolasi
Pipeline	Serangkaian langkah otomatis yang dijalankan saat ada perubahan kode
IaC	Infrastructure as Code — Infrastruktur didefinisikan dalam file kode
Orchestration	Pengelolaan banyak container secara otomatis (contoh: Kubernetes)
Observability	Kemampuan memahami kondisi internal sistem dari output eksternalnya
GitOps	Pendekatan operasional di mana Git menjadi sumber kebenaran tunggal
SRE	Site Reliability Engineering — Praktik engineering untuk menjaga reliabilitas sistem
Shift-Left	Memindahkan proses testing/security lebih awal dalam siklus development
Blue/Green Deploy	Strategi deployment dengan dua environment identik untuk zero-downtime

— End of Document —
SinauDevOps v1.0 | From Zero to Hero
