export const disasterText = [
  {
    id: 1,
    name: "호우",
    title1: "호우 예방법",
    title2: "호우 조치법",
    prevention: [
      {
        // 예방5가지
        title: "배수 관리",
        desc: "배수로를 미리 정비하고, 물이 고이지 않도록 지하 배수 시설을 설치해주세요.",
      },
      {
        title: "작물 재배 방법 조정",
        desc: "고지대에 재배하고, 키 큰 작물에는 지지대를 설치해 비바람에 쓰러지지 않도록 해주세요.",
      },
      {
        title: "비닐 멀칭 및 피복",
        desc: "비닐이나 터널 피복으로 토양 침식을 방지하고 작물이 비를 직접 맞지 않도록 보해해주세요",
      },
      {
        title: "토양관리",
        desc: "유기물을 추가해 토양을 안정시키고, 경사지에서는 계단식 경작으로 토양유실을 방지해주세요.",
      },
      {
        title: "비닐하우스 점검",
        desc: "비닐하우스를 보강하고, 물 빠짐 시설을 추가해 물이 고이지 않도록 관리해주세요.",
      },
    ],

    measures: [
      {
        // 5
        title: "작물 피해 복구",
        desc: "침수된 작물은 빠르게 물을 뺴고, 손상된 부분을 제거해주세요. 병해충 예방을 위해 살균제를 사용해주세요",
      },
      {
        title: "토양복구",
        desc: "침식된 토양에 유기물과 비료를 추가하고, 물에 잠긴 밭은 공기를 공급하기 위해 토양을 갈아주세요.",
      },
      {
        title: "추가 영양 공급",
        desc: "작물에 칼슘과 인 비료를 추가로 공급해 빠른 회복을 도와줍니다.",
      },
      {
        title: "배수로 정비",
        desc: "호우 후 배수로가 막히지 않도록 청소하고, 지하 배수관도 점검해줍니다.",
      },
      {
        title: "작물 지지대 설치",
        desc: "넘어진 작물은 지지대를 세워 다시 똑바로 자랄 수 있도록 도와줍니다.",
      },
    ],
  },
  {
    id: 2,
    name: "폭염",
    title1: "폭염 예방법",
    title2: "폭염 조치법",
    prevention: [
      {
        title: "작물의 그늘 제공",
        desc: "차광망을 설치하여 태양의 강한 빛을 차단해 작물 온도 상승과 수분 증발을 줄이고, 비닐하우스 내 온도를 낮추기 위해 차광망을 사용합니다.",
      },
      {
        title: "관수관리",
        desc: "한낮에 물주기를 피하여 아침이나 저녁에 물을 주며, 비닐 멀칭으로 수분 증발 방지 및 뿌리 온도를 낮춰줍니다.",
      },
      {
        title: "토양 관리 및 영양 공급",
        desc: "유기물을 사용하여 토양의 수분 보유 능력을 향상시키고, 폭염 스트레스에 대응할 수 있도록 영양을 보충해줍니다.",
      },
    ],
    measures: [
      {
        title: "손상된 작물 관리",
        desc: "손상된 부분을 제거하여 건강한 부분이 잘 자라도록 하며,충분한 수분 공급하되 과도하게 물을 주지 않도록 주의합니다.",
      },
      {
        title: "영양보충",
        desc: "영양제를 공급하여 생장 촉진제나 미네랄 비료로 회복 촉진을 해주며,수분을 보충하여 작물의 수분 필요를 충족시키도록 관리 해줍니다.",
      },
      {
        title: "병해충 예방",
        desc: "폭염 후 병해충 발생 위험 증가, 농약 등을 사용해 예방 조치합니다.",
      },
    ],
  },
  {
    id: 3,
    name: "가뭄",
    title1: "가뭄 예방법",
    title2: "가뭄 조치법",
    prevention: [
      {
        title: "토양관리",
        desc: "유기물을 첨가하여 토양에 섞어 물 저장 능력을 높이고, 토양표면에 유기물이나 비닐 등을 덮어 수분 증발을 줄입니다.",
      },
      {
        title: "관개 시스템",
        desc: "물을 직접 뿌리 부위에 전달하여 낭비를 줄이고, 자동으로 물을 분배하는 시스템을 설치하여 일정하게 물을 공급합니다.",
      },
      {
        title: "토양구조",
        desc: "배수가 잘 되고 공기 순환이 원활한 토양을 유지합니다.",
      },
    ],
    measures: [
      {
        title: "비상 관개 조치",
        desc: "필요 시 수동으로 물을 공급하고, 가축의 배수물이나 다른 자원을 재활용하여 사용합니다.",
      },
      {
        title: "물 관리 및 저장",
        desc: "물을 저장할 수 있는 시설을 확보하여 필요 시 사용하고,농업용 수조가 있을 경우 농업용 수조를 점검하고 유지 보수합니다.",
      },
      {
        title: "긴급 대응 계획",
        desc: "가뭄 상황에서의 긴급 대응 계획을 마련하고, 물 자원을 효율적으로 배분하여 농작물에 우선적으로 공급합니다.",
      },
      {
        title: "모니터링",
        desc: "토양 수분 센서를 활용하여 실시간으로 수분 상태를 모니터링 합니다.",
      },
    ],
  },
  {
    id: 4,
    name: "태풍",
    title1: "태풍 예방법",
    title2: "태풍 조치법",
    prevention: [
      {
        title: "시설 점검 및 보강",
        desc: "온실과 저장창고는 지붕과 벽의 상태를 확인하고 필요시 보강합니다. 농기구 및 자재는 바람에 날아갈 수 있는 자재들을 안전하게 보관하거나 고정합니다.",
      },
      {
        title: "배수 시스템",
        desc: "배수로에 나뭇가지나 쓰레기가 쌓이지 않도록 청소하고, 저수지의 수위를 확인하고 필요 시 추가 배수로를 설치합니다.",
      },
      {
        title: "작물관리",
        desc: "작물의 지지대를 설치하여 바람에 의해 쓰러지지 않도록하고 바람과 비에 영향을 덜 받도록 작물의 배치와 재배 방법을 조정합니다.",
      },
      {
        title: "수확시기 조정",
        desc: "수확 가능한 작물은 태풍이 오기 전에 미리 수확합니다. 특히 뿌리 작물은 수확 후 적절히 저장합니다.",
      },
      {
        title: "비료 및 농약 관리",
        desc: "비료와 농약 사용량을 조절하여 비에 의해 씻겨 나가는 것을 방지합니다.",
      },
    ],
    measures: [
      {
        title: "시설 보호 및 보강",
        desc: "태풍이 가까워지기 전에 시설의 상태를 다시 점검하고 추가적인 보강작업을 하며,농장 주변의 잡목이나 날아갈 위험이 있는 물체를 제거합니다.",
      },
      {
        title: "작물 보호",
        desc: "작물 주변에 방풍막을 설치하여 바람을 차단하고, 식물 보호 덮개를 사용하여 비와 바람으로부터 작물을",
      },
      {
        title: "물리적 피해 방지",
        desc: "배수로와 배수 시스템을 점검하고 필요 시 임시 배수로를 설치하고, 작업자와 농민의 안전을 위해 작업을 중지하고 대피합니다.",
      },
    ],
  },
  {
    id: 5,
    name: "대설",
    title1: "대설 예방법",
    title2: "대설 조치법",
    prevention: [
      {
        title: "시설물 보강",
        desc: "비닐하우스가 눈의 무게를 견디기 위해 기둥을 추가 설치하거나 보강하고 지붕을 경사지게 하여 눈이 잘 미끄러져 내려가도록하고, 눈이 쌓이지 않도록 주기적으로 치워줍니다.,",
      },
      {
        title: "작물 피복",
        desc: "대설이 예상될 경우, 터널 피복을 설치하여 작물을 눈으로부터 보호하며. 지피(짚 ,풀)로 작물의 뿌리를 덮어 토양 온도를 유지하고 작물이 얼어붙지 않도록 합니다.",
      },
      {
        title: "작물 배치와 재배법 조정",
        desc: "물빠짐이 좋은 고지대레서 작물을 재배하여 저지대의 물 고임을 피하고, 눈에 취약한 작물은 대설 전에 미리 수확하거나 비닐하우스 내부로 옮겨 보호합니다.",
      },
      {
        title: "배수 관리",
        desc: "대설 후 녹이 녹을때 배수가 원할히 이루어지도록 배수로를 미리 점검하고 준비합니다.",
      },
    ],
    measures: [
      {
        title: "시설물 점검",
        desc: "비닐하우스에 쌓인 눈을 즉시 제거하여 구조물의 파손을 방지하고, 파손된 경우 빠르게 복구하여 작물을 보호합니다.",
      },
      {
        title: "작물 손상 관리",
        desc: "얼거나 부러진 작물의 잎이나 줄기를 제거하여 남은 작물이 건강하게 자랄 수 있도록 합니다.",
      },
      {
        title: "토양 배수 관리",
        desc: "대설 후 눈이 녹느면서 물이 고일 수 있으므로, 배수로를 점검하고 물이 빠르게 배출되도록 관리하고, 물이 고인 토양을 가볍게 갈아주어 공기 공급을 원활하게 합니다.",
      },
      {
        title: "영양 보충 및 생장 촉진",
        desc: "손상된 작물에 필요한 영양을 공급하여 회복을 촉진하고, 생장촉진제를 사용하여 빠른 회복을 돕습니다.",
      },
    ],
  },
  {
    id: 6,
    name: "한파",
    title1: "한파 예방법",
    title2: "한파 조치법",
    prevention: [
      {
        title: "재배 시기 조정",
        desc: "한파가 심한 시기를 피하기 위해 겨울철에는 가능한 일찍 파종하거나 한파예상 전에 수확을 완료합니다.",
      },
      {
        title: "작물 피복 및 보온",
        desc: "뿌리작물에는 비닐을 덮어 토양 온도를 유지하고,작물위에 터널 형태로 비닐이나 부직포르 덮어보온 하여 한파가 심할 때는 이중 피복을 사용합니다. ",
      },
      {
        title: "시설 관리",
        desc: "한파가 예상될 때는 환기를 최소화하여 따뜻한 공기가 빠져나가지 않도록하며, 난방기, 온풍기,지중 난방 또는 온수관을 사용하여 일정한 온도를 유지합니다.",
      },
      {
        title: "방풍망 설치",
        desc: "강한 바람으로 인한 한파 피해를 줄이기 위해 방풍망이나 방풍림을 설치합니다.",
      },
      {
        title: "영양관리",
        desc: "한파 전에 칼륨이 포함된 비료를 사용해 작물의 면역력을 높이고, 물을 충분히 주어 토양의 온도를 유지하고 뿌리 손상을 방지합니다.",
      },
    ],
    measures: [
      {
        title: "손상된 작물 제거",
        desc: "한파로 인해 손상된 잎이나 줄기를 신속하게 제거하고, 병원균 감염을 방지하기 위해 소독제를 사용합니다.",
      },
      {
        title: "생장 촉진제나 비료 사용",
        desc: "아미노산 비료나 칼슘 비료를 사용해 손상된 세포를 회복시키고 생장 촉진을 돕습니다.",
      },
      {
        title: "보온 조치",
        desc: "한파가 지속될 경우 추가적인 피복이나 보온재를 사용하여 작물을 보호합니다. 터널 피복을 추가하거나 비닐하우스 내 난방을 강화합니다.",
      },
      {
        title: "적절한 물 공급",
        desc: "한파 후 과습을 피하고, 토양 상태를 확인한 후 필요할 때만 물을 줍니다.",
      },
      {
        title: "병충해 방제",
        desc: "한파 후 면역력이 약해진 작물에 대해 예방적으로 농약을 살포하거나 천적을 이용하여 병충해를 방지합니다.",
      },
      {
        title: "추가 비료 공급",
        desc: "한파로 인해 부족할 수 있는 영양을 보충하기 위해 적절한 비료를 추가로 공급합니다. 질소 비료는 피하고, 칼륨과 인이 풍부한 비료를 사용합니다.",
      },
      {
        title: "작물 재배 계획 조정",
        desc: "피해를 입은 작물이 회복이 어렵다면 대체 작물을 심거나 추가 파종을 고려합니다.",
      },
    ],
  },
  {
    id: 7,
    name: "지진",
    title1: "지진 예방법",
    title2: "지진 조치법",
    prevention: [
      {
        title: "시설물 강화",
        desc: "기둥 및 지붕을 강화하고 물건이 떨어지지않도록 고정 장치를 점검합니다.",
      },
      {
        title: "작물 및 토양 관리",
        desc: "배수로를 청소하고 적절한 경사를 유지하여 토양 유실 방지 및 보강 작업을 합니다.",
      },

      {
        title: "지진 정보 모니터링",
        desc: "지진 경고 시스템을 모니터링하고,지진 감지를 위해 조기 경고를 위한 센서를 설치합니다",
      },
    ],
    measures: [
      {
        title: "시설물 점검",
        desc: "구조물을 확인한 후 손상여부를 점검하고, 임시 보강작업을 합니다 또 전기 및 가스점검을 하여 유출이나 단선이 없는지 확인합니다.",
      },
      {
        title: "배수관리",
        desc: "배수로를 청소하고 정비하여 물빠짐을 원활하게 합니다.",
      },
      {
        title: "추가지진 예보확인",
        desc: "후속 지진이나 여진의 가능성을 모니터링합니다.",
      },
      {
        title: "시설물 복구",
        desc: "손상된 시설을 복구하고 작물과 농장 환경을 정상으로 회복합니다.",
      },
    ],
  },
  {
    id: 8,
    name: "유해 야생동물",
    title1: "유해 야생동물 예방법",
    title2: "유해 야생동물 조치법",
    prevention: [
      {
        title: "시설물 관리",
        desc: "전기 울타리나 강한 재질의 울타리로 야생동물 접근을 차단하고, 고밀도 망으로 작물을 보호합니다.",
      },
      {
        title: "작물 보호",
        desc: "유인제를 사용하여 특정 냄새나 소리로 동물접근을 차단하고, 작물 위에 보호 덮개를 사용합니다.",
      },
      {
        title: "경고 및 소음장치",
        desc: "공포탄이나 방울 소리로 동물 접근을 방지하며, 경고 장치나 조명을 설치합니다.",
      },
      {
        title: "동물 차단 및 유인",
        desc: "유해 동물 출몰 패턴을 관찰하고, 자연적인 천적을 유인합니다.",
      },
    ],
    measures: [
      {
        title: "피해복구",
        desc: "손상된 작물을 수리 또는 교체하며, 손상된 방어 시설을 즉시 수리합니다.",
      },
      {
        title: "야생동물 퇴치",
        desc: "필요시 유해 동물 포획 또는 제거하거나. 서식지 파악 후 제거합니다.",
      },
      {
        title: "방어시스템 강화",
        desc: "기존 방어시스템을 보강합니다.",
      },
    ],
  },
];
export default disasterText;
