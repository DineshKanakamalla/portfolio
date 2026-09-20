// Single source of truth for the portfolio content.
// Keeping copy in one module means navigation, hero and footer never drift apart.
// Facts here mirror SivaDinesh_Resume.pdf; update both together.

export const profile = {
  name: 'Kanakamalla Siva Dinesh',
  shortName: 'Siva Dinesh',
  initials: 'SD',
  role: 'Embedded Software Engineer',
  focus: 'Embedded Linux · Networking · Wireless',
  tagline: 'Embedded C & Linux — network protocols, wireless stacks and firmware security',
  location: 'Bangalore, India',
  email: 'sivadineshkanakamalla@gmail.com',
  linkedin: 'https://www.linkedin.com/in/siva-dinesh-kanakamalla-28b863214',
  github: 'https://github.com/DineshKanakamalla',
  noticePeriod: '30 days',
  languages: 'English, Telugu',
  availability: 'Open to embedded software, Linux and networking roles'
}

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'recognition', label: 'Recognition' },
  { id: 'contact', label: 'Contact' }
]

// Deliberately not xPON-first: the day job is Embedded C on Linux with networking.
export const heroFacts = [
  { value: 'Embedded C + Linux', label: 'Firmware for network devices on Linux and RTOS' },
  { value: 'Wi-Fi AP · CAPWAP', label: 'AP firmware: CAPWAP/DTLS control, 802.11k/v roaming and band steering' },
  { value: 'ITSAR-ready', label: 'Authentication, encryption, logging and DoS hardening' }
]

export const aboutParagraphs = [
  'I am an embedded software engineer working where firmware, Linux and networking meet. My work spans Wi-Fi access points, xPON ONUs and Ethernet switches on Realtek RTL9607C and MediaTek MT7621 / MT7915 silicon — different products, but the same discipline: Embedded C on Linux, protocols that behave correctly under real traffic, and firmware that survives the field.',
  'Most recently that has meant Wi-Fi access point firmware for a controller-managed AP (WTP) on MediaTek MT7621 / MT7915: I implemented the CAPWAP stack (RFC 5415 / RFC 5416) for device management and firmware upgrade over control messages, secured the control channel with DTLS, and added 802.11k/v roaming and band steering for smoother client handoff. On the access side I have hardened xPON ONU firmware to ITSAR expectations — password policy, privilege escalation rules, MAC filtering, DoS rate limiting and AES-128 protection.',
  'I also work below the source level: reverse engineering binaries with Ghidra to recover behaviour that was never documented, then reconstructing that logic with the help of AI agents. Careful packet-level debugging — an ACL rule dropping the wrong frame, a DNS lookup that fails only behind PPPoE — is the part of engineering I enjoy most.'
]

export const principles = [
  {
    title: 'Secure by default',
    text: 'ITSAR-aligned controls: authenticated privilege escalation, password policy, session timeouts, rate-limited logging and AES-128 protection for stored credentials.'
  },
  {
    title: 'From the RFC up',
    text: 'Specification before code — CAPWAP, DTLS, roaming and band steering implemented against the standard, then proven against a real controller and real clients.'
  },
  {
    title: 'Evidence over assumption',
    text: 'Packet captures, throughput figures and production calibration results before any change is called done.'
  }
]

export const skillGroups = [
  {
    title: 'Languages & Systems',
    skills: [
      'Embedded C — firmware, drivers, RTOS integration',
      'Python — automation and internal tooling',
      'Embedded Linux, FreeRTOS, POSIX threads'
    ]
  },
  {
    title: 'Networking & Protocols',
    skills: [
      'TCP/IP, UDP, HTTP/HTTPS',
      'IGMP proxy and multicast delivery',
      'NTP (Chrony) with authentication',
      'DHCP, DNS, PPPoE',
      'VLAN, QoS, port isolation and mirroring'
    ]
  },
  {
    title: 'Wireless & Access',
    skills: [
      'Wi-Fi AP (WTP) firmware and configuration',
      'CAPWAP (RFC 5415 / RFC 5416) — WTP side',
      'DTLS security for control channels',
      '802.11k / 802.11v roaming and band steering',
      'Wi-Fi 2.4 GHz / 5 GHz, Auto Channel Selection',
      'GPON / EPON (xPON) ONU firmware'
    ]
  },
  {
    title: 'Security & Compliance',
    skills: [
      'ITSAR compliance for production devices',
      'Password policy, privilege escalation, session timeouts',
      'DoS rate limiting (ICMP / UDP / FIN / SYN)',
      'MAC filtering, WAN IP locking, AES-128 Wi-Fi encryption',
      'ACL and iptables logging with rate limiting'
    ]
  },
  {
    title: 'Tools & Debugging',
    skills: [
      'Ghidra — binary reverse engineering',
      'Wireshark, tcpdump — packet-level debugging',
      'Postman, Burp Suite',
      'Git-based workflows'
    ]
  },
  {
    title: 'Production & Platforms',
    skills: [
      'MAC programming and provisioning utilities',
      'Wi-Fi calibration, throughput and coupling tests',
      'Wi-Fi AP, xPON ONU router, Ethernet switch',
      'Realtek RTL9607C (xPON ONU), MediaTek MT7621 / MT7915 (Wi-Fi AP)',
      'STM32G431, BeagleBone White',
      'CST Studio Suite (RF / antenna)'
    ]
  }
]

export const experience = [
  {
    role: 'Senior Development Engineer — Embedded Software',
    company: 'Smartlink Holdings Ltd. (Client: Digisol Systems Ltd.)',
    tags: ['Bangalore, India', 'Apr 2024 — Present', 'Embedded C · Linux'],
    note: 'Promoted from Development Engineer to Senior Development Engineer in June 2026.',
    groups: [
      {
        title: 'Wi-Fi Access Point',
        points: [
          'Developed and maintained Embedded C firmware for the Wi-Fi access point (WTP) on the MediaTek MT7621 / MT7915 platform, covering device configuration, wireless operation and client connectivity.',
          'Analysed CAPWAP RFC 5415 and RFC 5416 and implemented the full CAPWAP stack for the AP (WTP) side, enabling controller-managed wireless operation.',
          'Implemented Reboot, Restart, Factory Reset and Firmware Upgrade flows over CAPWAP control messages.',
          'Decoded and debugged vendor-specific payload elements to reach interoperability with an open-source CAPWAP AC server.',
          'Implemented DTLS security for the WTP and deployed the AC server with DTLS to meet ITSAR certification requirements.',
          'Worked on 802.11k/v roaming and band steering to improve client mobility, band selection and seamless handoff performance.'
        ]
      },
      {
        title: 'xPON ONU Firmware',
        points: [
          'Developed and enhanced Embedded C firmware for xPON ONUs on the Realtek RTL9607C SoC, with a focus on security, stability and performance.',
          'Integrated a secure NTP client (Chrony) with authentication and vulnerability safeguards.',
          'Built vendor-specific EPON/OLT configuration modules for WAN, Wi-Fi (2.4 GHz / 5 GHz) and TR-069 control.',
          'Designed Auto Channel Selection logic for both Wi-Fi bands and WAN IP locking for Router and PPPoE modes.',
          'Created a MAC programming utility for production-line provisioning, with validation covering Wi-Fi calibration, throughput and MAC verification.'
        ]
      },
      {
        title: 'ITSAR Security Compliance',
        points: [
          'Applied password policy controls: first-login reset, expiration, history validation and automatic expiry alerts.',
          'Enforced secure privilege escalation rules, session timeout handling and restricted file access for the web interface.',
          'Added MAC filtering, DoS-resistant packet rate limiting (ICMP / UDP / FIN / SYN), AES-128 Wi-Fi encryption and WPS brute-force protection.',
          'Resolved critical stability issues across ACL, DNS, PPPoE flows, MAC filtering and internet reachability logic.'
        ]
      },
      {
        title: 'Reverse Engineering & Debugging',
        points: [
          'Reverse engineered binary and executable files with Ghidra, reconstructing the original code logic with the help of AI agents.',
          'Traced production defects at packet level using Wireshark and tcpdump captures.'
        ]
      }
    ]
  },
  {
    role: 'Network Management System — Switch Server',
    company: 'Smartlink Holdings Ltd. (Client: Digisol Systems Ltd.)',
    tags: ['Apr 2024 — Sep 2024', 'Python', 'Ethernet switches'],
    highlights: [
      'Built the intermediary Python switch server that talks to devices over HTTP and HTTPS.',
      'Covered restart, factory reset, firmware upgrade, backup and restore, and log retrieval flows.',
      'Designed configuration flows for IP, VLAN, QoS, port settings, isolation and mirroring.',
      'Enabled device discovery, digest authentication, keep-alives and server-side log rotation.'
    ]
  }
]

export const projects = [
  {
    title: 'ITSAR-Compliant Wi-Fi Access Point',
    kicker: 'Wireless · AP firmware',
    description:
      'Production firmware for a controller-managed Wi-Fi access point on the MediaTek MT7621 / MT7915 platform — a full CAPWAP (RFC 5415 / RFC 5416) stack for device management and firmware upgrade over control messages, DTLS on the control channel, and 802.11k/v roaming with band steering for smoother client handoff.',
    tech: ['MT7621 / MT7915', 'CAPWAP RFC 5415/5416', 'DTLS', '802.11k/v roaming', 'Band steering', 'Embedded C'],
    link: null,
    note: 'Shipped at Smartlink / Digisol Systems',
    art: 'ap'
  },
  {
    title: 'xPON ONU Firmware & Security Hardening',
    kicker: 'Access network · Firmware security',
    description:
      'Production-grade Embedded C firmware for xPON ONUs covering WAN, Wi-Fi, TR-069, a secure NTP client, Auto Channel Selection and WAN IP locking, with the ITSAR control set: password policy, MAC filtering, DoS rate limiting and AES-128.',
    tech: ['RTL9607C', 'GPON / EPON', 'Chrony NTP', 'Auto Channel Selection', 'ITSAR'],
    link: null,
    note: 'Shipped at Smartlink / Digisol Systems',
    art: 'onu'
  },
  {
    title: 'Binary Reverse Engineering with Ghidra & AI Agents',
    kicker: 'Analysis · Reverse engineering',
    description:
      'Recovered the behaviour of undocumented binary and executable files with Ghidra, then reconstructed the original code logic with the help of AI agents — turning a black-box defect into a fixable, explainable component.',
    tech: ['Ghidra', 'Binary analysis', 'AI-assisted reconstruction'],
    link: null,
    note: 'Smartlink / Digisol Systems',
    art: 'reverse'
  },
  {
    title: 'CAN-Centric Industrial Monitoring & Control',
    kicker: 'Embedded · Industrial automation',
    description:
      'A two-node industrial monitoring system on STM32G431 (ARM Cortex-M4) boards communicating over FDCAN. MQ2 gas, BMP180 temperature/pressure and LDR readings travel from the TX unit to an RX unit that drives a fan, a buzzer and lighting, with live values on an LCD.',
    tech: ['STM32G431', 'FDCAN', 'BMP180', 'MQ2', 'ADC / I2C / GPIO'],
    link: 'https://github.com/DineshKanakamalla/CDAC_DESD_project',
    art: 'can'
  },
  {
    title: 'Compact Tri-Band Patch Antenna',
    kicker: 'RF · Antenna design · B.Tech final year',
    description:
      'A 20 × 20 mm² tri-band patch antenna covering 11.54–18.17 GHz for FSS and DBS Ku-band use. Modelled and optimised in CST Studio Suite 2022 for reflection coefficient, gain and VSWR using a defected ground structure.',
    tech: ['CST Studio Suite 2022', 'Ku-band', 'FSS / DBS', 'Defected ground structure'],
    link: null,
    art: 'antenna'
  }
]

export const awards = [
  {
    title: 'Best Innovation of the Year 2025–26',
    org: 'Smartlink Holdings Ltd.',
    year: '2025–26',
    text: 'Recognised for outstanding contributions to ONU firmware development.'
  }
]

export const strengths = [
  'Strong analytical and debugging capabilities',
  'Practical embedded systems and networking knowledge',
  'Effective team player and independent contributor',
  'Clear documentation and reverse-engineering experience'
]

export const education = [
  {
    programme: 'Post Graduate Diploma in Embedded Systems and Design (PG-DESD)',
    school: 'CDAC, Bangalore',
    period: 'Sep 2023 — Mar 2024',
    score: '81.2%',
    note: 'Embedded C, Linux system programming, device drivers, RTOS and networking fundamentals.'
  },
  {
    programme: 'B.Tech — Electronics & Communication Engineering',
    school: 'RVR & JC College of Engineering, Guntur',
    period: '2019 — 2023',
    score: 'CGPA 9.01 / 10',
    note: 'Final-year work on RF antenna design and embedded instrumentation.'
  }
]
