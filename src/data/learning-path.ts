export interface Phase {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  totalSessions: number;
  difficulty: "Dasar" | "Menengah" | "Mahir";
  color: string;
  sessions: Session[];
}

export interface Session {
  sessionId: number;
  title: string;
  description: string;
  duration: string;
}

export const phases: Phase[] = [
  {
    id: 1,
    title: "Pondasi DevOps",
    subtitle: "Konsep & Mindset",
    description: "Memahami apa itu DevOps, kenapa penting, dan dasar-dasar lingkungan teknis yang dibutuhkan.",
    icon: "🧱",
    totalSessions: 8,
    difficulty: "Dasar",
    color: "from-blue-500 to-blue-600",
    sessions: [
      { sessionId: 1, title: "Apa itu DevOps?", description: "Sejarah, pengertian, dan kenapa DevOps lahir", duration: "15 menit" },
      { sessionId: 2, title: "DevOps vs Traditional IT", description: "Perbedaan cara kerja dan mindset", duration: "15 menit" },
      { sessionId: 3, title: "DevOps Culture: CALMS", description: "Collaboration, Automation, Lean, Measurement, Sharing", duration: "20 menit" },
      { sessionId: 4, title: "Software Development Lifecycle (SDLC)", description: "Memahami alur kerja software dari plan ke deploy", duration: "20 menit" },
      { sessionId: 5, title: "Pengenalan Linux untuk DevOps", description: "Navigasi terminal, file system, permission", duration: "20 menit" },
      { sessionId: 6, title: "Dasar-dasar Networking", description: "IP, DNS, HTTP/HTTPS, Port, Firewall", duration: "20 menit" },
      { sessionId: 7, title: "Version Control dengan Git", description: "Konsep, init, commit, branch, merge", duration: "20 menit" },
      { sessionId: 8, title: "Kuis & Recap Fase 1", description: "10 soal PG, 5 soal praktik, 3 esai", duration: "30 menit" },
    ],
  },
  {
    id: 2,
    title: "Fondasi Teknis",
    subtitle: "Linux, Scripting & Jaringan",
    description: "Mahir menggunakan Linux, menulis script otomasi, dan memahami jaringan secara mendalam.",
    icon: "💻",
    totalSessions: 8,
    difficulty: "Menengah",
    color: "from-cyan-500 to-teal-500",
    sessions: [
      { sessionId: 1, title: "Linux Lanjutan", description: "Process management, systemd, cron job, log files", duration: "20 menit" },
      { sessionId: 2, title: "Bash Scripting", description: "Variabel, kondisi, loop, fungsi, error handling", duration: "20 menit" },
      { sessionId: 3, title: "Package Management", description: "apt, yum, snap — install & manage software", duration: "15 menit" },
      { sessionId: 4, title: "SSH & Remote Access", description: "Key-based auth, scp, rsync, tunneling", duration: "20 menit" },
      { sessionId: 5, title: "Networking Lanjutan", description: "Subnetting, Load Balancer, Reverse Proxy, VPN", duration: "20 menit" },
      { sessionId: 6, title: "File Server & Protokol", description: "FTP, SFTP, NFS, Samba", duration: "15 menit" },
      { sessionId: 7, title: "Manajemen User & Permission", description: "sudo, group, ACL, security hardening", duration: "20 menit" },
      { sessionId: 8, title: "Kuis & Recap Fase 2", description: "Tugas bash script + 10 soal PG + praktik SSH", duration: "30 menit" },
    ],
  },
  {
    id: 3,
    title: "Containerization",
    subtitle: "Docker & Registry",
    description: "Memahami dan menggunakan Docker untuk packaging, menjalankan, dan mendistribusikan aplikasi.",
    icon: "📦",
    totalSessions: 9,
    difficulty: "Menengah",
    color: "from-indigo-500 to-blue-600",
    sessions: [
      { sessionId: 1, title: "Apa itu Container?", description: "Perbedaan Container vs Virtual Machine", duration: "15 menit" },
      { sessionId: 2, title: "Instalasi Docker & Konsep Dasar", description: "Image, Container, Layer — pahami fundamental Docker", duration: "20 menit" },
      { sessionId: 3, title: "Docker CLI", description: "pull, run, stop, rm, ps, exec, logs", duration: "20 menit" },
      { sessionId: 4, title: "Dockerfile", description: "Menulis Dockerfile dari nol untuk aplikasi nyata", duration: "20 menit" },
      { sessionId: 5, title: "Docker Networking & Volume", description: "Bridge, host, named volumes — data persistence", duration: "20 menit" },
      { sessionId: 6, title: "Docker Compose", description: "Mendefinisikan multi-container app dalam satu file", duration: "20 menit" },
      { sessionId: 7, title: "Docker Registry", description: "Push & pull ke Docker Hub dan private registry", duration: "15 menit" },
      { sessionId: 8, title: "Best Practice Docker", description: "Image optimization, security scanning, .dockerignore", duration: "15 menit" },
      { sessionId: 9, title: "Kuis & Recap Fase 3", description: "Tugas Dockerfile + Docker Compose + 12 soal PG", duration: "30 menit" },
    ],
  },
  {
    id: 4,
    title: "CI/CD Pipeline",
    subtitle: "Automation",
    description: "Membuat pipeline otomatis untuk build, test, dan deploy aplikasi ke berbagai environment.",
    icon: "🔄",
    totalSessions: 9,
    difficulty: "Menengah",
    color: "from-orange-500 to-red-500",
    sessions: [
      { sessionId: 1, title: "Apa itu CI/CD?", description: "Continuous Integration vs Delivery vs Deployment", duration: "15 menit" },
      { sessionId: 2, title: "GitHub Actions", description: "Workflow, Event, Job, Step, Runner", duration: "20 menit" },
      { sessionId: 3, title: "Pipeline CI", description: "Build dan test otomatis setiap push ke repository", duration: "20 menit" },
      { sessionId: 4, title: "Pipeline CD", description: "Deploy otomatis ke staging dan production", duration: "20 menit" },
      { sessionId: 5, title: "GitLab CI/CD", description: ".gitlab-ci.yml, stages, artifacts, environments", duration: "20 menit" },
      { sessionId: 6, title: "Jenkins", description: "Instalasi, Jenkinsfile, declarative pipeline", duration: "20 menit" },
      { sessionId: 7, title: "Secret Management", description: "Environment variables, vault secrets di pipeline", duration: "15 menit" },
      { sessionId: 8, title: "Testing dalam Pipeline", description: "Unit test, integration test, static analysis", duration: "15 menit" },
      { sessionId: 9, title: "Kuis & Recap Fase 4", description: "Tugas GitHub Actions + 10 soal + analisis pipeline", duration: "30 menit" },
    ],
  },
  {
    id: 5,
    title: "Infrastructure as Code",
    subtitle: "IaC & Cloud",
    description: "Mendefinisikan infrastruktur melalui kode dan mengelola resource cloud secara otomatis.",
    icon: "☁️",
    totalSessions: 9,
    difficulty: "Mahir",
    color: "from-purple-500 to-violet-600",
    sessions: [
      { sessionId: 1, title: "Apa itu IaC?", description: "Prinsip dan manfaat Infrastructure as Code", duration: "15 menit" },
      { sessionId: 2, title: "Terraform Dasar", description: "Provider, Resource, Variable, Output, State", duration: "20 menit" },
      { sessionId: 3, title: "Terraform Lanjutan", description: "Module, Remote State, Workspaces", duration: "20 menit" },
      { sessionId: 4, title: "Ansible", description: "Inventory, Playbook, Role, Task — konfigurasi otomatis", duration: "20 menit" },
      { sessionId: 5, title: "Cloud Fundamental", description: "AWS/GCP/Azure — Region, AZ, VPC, IAM", duration: "20 menit" },
      { sessionId: 6, title: "Compute di Cloud", description: "EC2, Cloud Run, App Service — cara deploy app", duration: "20 menit" },
      { sessionId: 7, title: "Storage & Database Cloud", description: "S3, RDS, Cloud SQL — Setup dan integrasi", duration: "20 menit" },
      { sessionId: 8, title: "Networking Cloud", description: "VPC, Subnet, Security Group, Load Balancer", duration: "20 menit" },
      { sessionId: 9, title: "Kuis & Recap Fase 5", description: "Tugas Terraform + Ansible + 12 soal", duration: "30 menit" },
    ],
  },
  {
    id: 6,
    title: "Kubernetes",
    subtitle: "Container Orchestration",
    description: "Memahami dan mengelola container dalam skala besar menggunakan Kubernetes.",
    icon: "⚙️",
    totalSessions: 10,
    difficulty: "Mahir",
    color: "from-blue-600 to-cyan-600",
    sessions: [
      { sessionId: 1, title: "Apa itu Kubernetes?", description: "Kenapa butuh orchestrator setelah Docker?", duration: "15 menit" },
      { sessionId: 2, title: "Arsitektur Kubernetes", description: "Control Plane, Worker Node, etcd, kubelet", duration: "20 menit" },
      { sessionId: 3, title: "Core Objects", description: "Pod, Deployment, Service, Namespace, ConfigMap", duration: "20 menit" },
      { sessionId: 4, title: "kubectl", description: "Perintah penting untuk mengelola cluster", duration: "20 menit" },
      { sessionId: 5, title: "Storage di K8s", description: "PersistentVolume, PersistentVolumeClaim, StorageClass", duration: "20 menit" },
      { sessionId: 6, title: "Networking K8s", description: "Ingress, NetworkPolicy, Service Types", duration: "20 menit" },
      { sessionId: 7, title: "Helm", description: "Package manager — install, upgrade, rollback", duration: "20 menit" },
      { sessionId: 8, title: "Auto Scaling", description: "HPA, VPA, Cluster Autoscaler", duration: "15 menit" },
      { sessionId: 9, title: "Kubernetes Security", description: "RBAC, Pod Security, Secret management", duration: "20 menit" },
      { sessionId: 10, title: "Kuis & Recap Fase 6", description: "Deploy multi-tier app + Ingress + 15 soal", duration: "30 menit" },
    ],
  },
  {
    id: 7,
    title: "Observability & Security",
    subtitle: "Expert Practices",
    description: "Monitoring, keamanan infrastruktur, dan best practice DevOps di production.",
    icon: "🔭",
    totalSessions: 10,
    difficulty: "Mahir",
    color: "from-emerald-500 to-green-600",
    sessions: [
      { sessionId: 1, title: "Observability vs Monitoring", description: "3 Pillars: Metrics, Logs, Traces", duration: "15 menit" },
      { sessionId: 2, title: "Prometheus & Grafana", description: "Scrape metrics, buat dashboard, alerting", duration: "20 menit" },
      { sessionId: 3, title: "Log Management", description: "ELK/EFK Stack, Loki, centralized logging", duration: "20 menit" },
      { sessionId: 4, title: "Distributed Tracing", description: "Jaeger, OpenTelemetry — trace request antar service", duration: "20 menit" },
      { sessionId: 5, title: "SRE Practices", description: "SLO, SLI, SLA, Error Budget, blameless postmortem", duration: "20 menit" },
      { sessionId: 6, title: "DevSecOps", description: "Shift-left security, SAST, DAST, Container scanning", duration: "20 menit" },
      { sessionId: 7, title: "GitOps", description: "ArgoCD, FluxCD — Deploy dengan Git sebagai source of truth", duration: "20 menit" },
      { sessionId: 8, title: "Service Mesh", description: "Istio/Linkerd — Traffic management, mTLS, observability", duration: "20 menit" },
      { sessionId: 9, title: "Disaster Recovery", description: "Backup strategy, RTO/RPO, chaos engineering", duration: "20 menit" },
      { sessionId: 10, title: "Final Project & Kuis Akhir", description: "Full pipeline + Prometheus + GitOps + 20 soal final", duration: "45 menit" },
    ],
  },
];

export function getPhase(phaseId: number): Phase | undefined {
  return phases.find((p) => p.id === phaseId);
}

export function getSession(phaseId: number, sessionId: number) {
  const phase = getPhase(phaseId);
  if (!phase) return null;
  return phase.sessions.find((s) => s.sessionId === sessionId) ?? null;
}

export function getTotalSessions(): number {
  return phases.reduce((sum, p) => sum + p.totalSessions, 0);
}
