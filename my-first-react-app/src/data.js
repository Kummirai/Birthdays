const payouts = ["Received", "Pending", "notSubscribed"];
const [Received, Pending, notSubscribed] = payouts;

export const birthdays = [
  {
    birth: "SEPT",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t1.6435-9/183450222_4054724281251845_2634091800033727112_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=2cTmvRRPW6EQ7kNvgHiabWM&_nc_ht=scontent-jnb2-1.xx&_nc_gid=AqzfPutvtLE6KCGhCq43oSo&oh=00_AYBcxuWvZVUEhYLpaQbCufLKm098zrm3HC7mKylJHaw1_g&oe=6719EDFC",
    name: "Milton Kumirai",
    birthday: "18 Sept",
    job: "R 100",
    payout: Pending,
  },
  {
    birth: "JAN",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/357701441_174107248981455_3111497278499106377_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=y559ROsVtiYQ7kNvgFOu2R0&_nc_ht=scontent-jnb2-1.xx&_nc_gid=AVIwlbMI7byJ1vTqM6zHjRq&oh=00_AYAB_l_4QPCM3VXviGHZam45rorSpE_dYWDNc9kfMypM9g&oe=66F8912F",
    name: "Freelance Moyo",
    birthday: "23 Jan",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "SEPT",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/380660399_6620250041403928_7451867255820404137_n.jpg?stp=dst-jpg_s206x206&_nc_cat=107&ccb=1-7&_nc_sid=7a06f5&_nc_ohc=y3QrZ9q4bMAQ7kNvgGOt_b0&_nc_ht=scontent-jnb2-1.xx&_nc_gid=A5I54skKBkho_lTdusUehX_&oh=00_AYAptHkhQCEOsNdyqxRaOJ_kPAS3Nrkorfdx8fzti0_DYQ&oe=66F83304",
    name: "Kayz Dube",
    birthday: "29 Sept",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "MAY",
    image:
      "https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "Sakhile Moyo",
    birthday: "29 May",
    job: "R 400",
    payout: Received,
  },
  {
    birth: "DEC",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/369675271_203693012689545_3406645001553680626_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=njuTwwsLqhwQ7kNvgHkELT8&_nc_ht=scontent-jnb2-1.xx&oh=00_AYAoG6jLSZFr0NRNkaD0Gu3spe8jpuD-qPm9x0OYpDgc5g&oe=66F85F50",
    name: "Audience Sibanda",
    birthday: "19 Dec",
    job: "R 380",
    payout: Pending,
  },
  {
    birth: "APR",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/385749298_228640700194776_4305483988846488504_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AAsn5wyPs3oQ7kNvgGcNHwK&_nc_ht=scontent-jnb2-1.xx&_nc_gid=A34e6UbScnSsLRo7P3la4_N&oh=00_AYAdAsMCnv7U0P6mptlYuUTk48JhgZPEVbRS1DvxW3Oxjg&oe=66F856FD",
    name: "Khulekani Khumalo",
    birthday: "23 April",
    job: "R 320",
    payout: Received,
  },
  {
    birth: "JAN",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/340743402_635503055075677_9012774665059974543_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_ohc=sPZvw6gngLUQ7kNvgGeBBVI&_nc_ht=scontent-jnb2-1.xx&_nc_gid=A81_PtJrz6NV1e_jXRMMQtD&oh=00_AYCxcCFK6e7wZeyQTXGkFtNUV-Mf_Fi9M89GT8wsOHXeRw&oe=66F84F85",
    name: "Mzingaye Ndebele",
    birthday: "5 Jan",
    job: "R 400",
    payout: Received,
  },
  {
    birth: "JAN",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-1/434385163_7361562690618511_484491708515122839_n.jpg?stp=dst-jpg_s100x100&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=h218c4sx8UMQ7kNvgE-PbRk&_nc_ht=scontent-jnb2-1.xx&oh=00_AYBs6845tJz239VQJZRpkIKeZMFxoT_PN5BBeSWiYcxN_w&oe=66F8327C",
    name: "Webster Nyathi",
    birthday: "6 Jan",
    job: "R 280",
    payout: Received,
  },
  {
    birth: "FEB",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/318758533_3249176942014946_8743894333049547814_n.jpg?stp=dst-jpg_s206x206&_nc_cat=106&ccb=1-7&_nc_sid=7a06f5&_nc_ohc=8KjjcmKZ0vYQ7kNvgFMPbm4&_nc_ht=scontent-jnb2-1.xx&_nc_gid=Asq9ncoLLN_OZhgkC7usRdL&oh=00_AYClBcXyfv6Cg9M7EhQaD6Ceo4hx7Wk5rknmmFDTbYbWLg&oe=66F8496A",
    name: "Debra Tshuma",
    birthday: "19 Feb",
    job: "R 230",
    payout: Received,
  },
  {
    birth: "MAR",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/242389094_915910209321192_6317569499868056545_n.jpg?stp=c0.277.1080.1080a_dst-jpg_s206x206&_nc_cat=110&ccb=1-7&_nc_sid=50c75d&_nc_ohc=WMjwNnT5IQoQ7kNvgGIxcJg&_nc_ht=scontent-jnb2-1.xx&_nc_gid=Ax7pI6w4Hr5BDZfPAHkxFxh&oh=00_AYBiJMwPs84bYGz0Y0jXX7mjJd37ZbP95u4yVVxvhww-dg&oe=66F842A0",
    name: "Nosisa Tshuma",
    birthday: "22 March",
    job: "R 180",
    payout: Received,
  },
  {
    birth: "MAY",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/430112479_122132765612123614_83386428259867008_n.jpg?stp=dst-jpg_s206x206&_nc_cat=110&ccb=1-7&_nc_sid=d0a8c7&_nc_ohc=QxzM6scLyhoQ7kNvgFWV-5O&_nc_ht=scontent-jnb2-1.xx&oh=00_AYCPLcuWi8D7fpC3qWbuWwNz7ol9Rk4dw2JwZaHPPLz6Rw&oe=66F856E5",
    name: "Senzile Dube",
    birthday: "14 May",
    job: "R 440",
    payout: Pending,
  },
  {
    birth: "MAY",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t1.6435-9/124153771_369660994349829_7201188310254392357_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=1ogmISrfp1MQ7kNvgE7fEVw&_nc_ht=scontent-jnb2-1.xx&_nc_gid=A8wS4evZVnMwUG589YL9kPj&oh=00_AYBCA0VvOaMbxRhCpLKS8_6Idt4SlFAm_nc7Sfo3a-O1tw&oe=671D38D6",
    name: "Thulani Mahlangu",
    birthday: "17 May",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "MAY",
    image:
      "https://images.pexels.com/photos/2896428/pexels-photo-2896428.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "Thobekile",
    birthday: "18 May",
    job: "R 100",
    payout: Received,
  },
  {
    birth: "MAY",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/404420774_6812595095503427_6457550863345402062_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=c88r1JPikgIQ7kNvgGyfHnx&_nc_ht=scontent-jnb2-1.xx&_nc_gid=AMrfmmMvQCkuQ1QSQpZlHWt&oh=00_AYD9oL0at_wTyw_cLFlLV2tCRRLDfD0-Ukw8EiEi5JxnOg&oe=66F838E7",
    name: "Blessed Sibanda",
    birthday: "20 May",
    job: "R 0",
    payout: Received,
  },
  {
    birth: "MAY",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t1.6435-9/136707118_110144077676524_6761408064091489217_n.jpg?stp=dst-jpg_s206x206&_nc_cat=101&ccb=1-7&_nc_sid=7a06f5&_nc_ohc=NLvYpzCEz-MQ7kNvgEueyMQ&_nc_ht=scontent-jnb2-1.xx&_nc_gid=Au9U-zQg1p7t8endoIW0RrQ&oh=00_AYDAbHZHbZCuQCA2MzMbUv1o8qM0beNHbbpFjXNLRuSccg&oe=6719EBD8",
    name: "Tinkie Sibanda",
    birthday: "29 May",
    job: "R 50",
    payout: Received,
  },
  {
    birth: "JUL",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/449783164_7430234567099542_4572840874129830452_n.jpg?stp=cp6_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_ccmevYPdQkQ7kNvgGoThHH&_nc_ht=scontent-jnb2-1.xx&_nc_gid=AoLJlyOICwUrokwys13zLQ_&oh=00_AYBJYevvNk7D8Vd6QYF-_K2PHrHPUkT3hVWAhKtvfYsAKA&oe=66F83F14",
    name: "Gracious Mguni",
    birthday: "4July",
    job: "R 280",
    payout: Received,
  },
  {
    birth: "JUL",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/402641058_324707300281052_8736792405816940482_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8ZmqcETsUkoQ7kNvgG_dqS4&_nc_ht=scontent-jnb2-1.xx&oh=00_AYDfqDtMuErSPTIU1KQVsf6PogAqutH81Wka1CBZvdgVmg&oe=66F828EC",
    name: "Thabani Moyo",
    birthday: "23 July",
    job: "R 280",
    payout: Received,
  },
  {
    birth: "AUG",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/461326957_1678068659705430_2494753679609990368_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=X2PbtJZSKDcQ7kNvgExTzMK&_nc_ht=scontent-jnb2-1.xx&_nc_gid=AFEDHyEYHVzv01Fp0YJaLKJ&oh=00_AYBcj5lAjJXQZM-bA7sNZ6VOtoRYNrMJYCKFqKqfYCKj2w&oe=66FE2245",
    name: "Fifi Masayi",
    birthday: "16 August",
    job: "R 100",
    payout: Received,
  },
  {
    birth: "AUG",
    image:
      "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "Rachel MaNetha",
    birthday: "25 August",
    job: "R 300",
    payout: Received,
  },
  {
    birth: "AUG",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/407897343_265034006555445_9160922475673875105_n.jpg?stp=c0.106.960.960a_dst-jpg_s206x206&_nc_cat=111&ccb=1-7&_nc_sid=50ad20&_nc_ohc=QjamPELkkDAQ7kNvgFCjnoW&_nc_ht=scontent-jnb2-1.xx&_nc_gid=AcmlDc6OTp7g-FNkQ0VFLxb&oh=00_AYB77rWu8XpbHwnNtP2jkNe8bl9BDzlikklCwiAFz9jrdQ&oe=66F8526F",
    name: "Pamela Phiri",
    birthday: "29 August",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "SEPT",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t1.6435-9/170048147_2955928064683719_6423659088146893448_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=IRtDysI-5E8Q7kNvgEKcQBf&_nc_ht=scontent-jnb2-1.xx&_nc_gid=AdtzF3ctEQbeuoRS9AbN2BH&oh=00_AYAFbgI3xvf2YmaQ_-bIKkNEVRB6f3XVtL6dXwyZqx-wvQ&oe=6719F3F1",
    name: "Moses Fusi",
    birthday: "30 Sept",
    job: "R 200",
    payout: Pending,
  },
  {
    birth: "OCT",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/245527788_568813674368601_7716348227149492240_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=TK_Lu5aguIsQ7kNvgFS4k0a&_nc_ht=scontent-jnb2-1.xx&oh=00_AYDFqphpdjOr0qpsDwUk4t1tji2j1dnlCxIOxCbaDSuS0A&oe=66F82756",
    name: "Patie Sibanda",
    birthday: "24 October",
    job: "R 440",
    payout: Pending,
  },
  {
    birth: "OCT",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/340471503_811379477078874_2938963921617377213_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_ohc=NifiNrwNoRwQ7kNvgE8r7W9&_nc_ht=scontent-jnb2-1.xx&oh=00_AYAJEO_DY7AkZd9-Fjd4gGr_04MKNrTiQKakISZwjInFoA&oe=66F851D0",
    name: "Sisa Nkala",
    birthday: "29 Oct",
    job: "R 220",
    payout: Pending,
  },
  {
    birth: "NOV",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/369532924_203690862689760_1613193417178438092_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=X5XbGpNHIyYQ7kNvgEUjDvD&_nc_ht=scontent-jnb2-1.xx&oh=00_AYCXV6mAQFAq_tl0kB99D5kRKXWyruxyyKGFgNAMnjJAhA&oe=66F850CC",
    name: "Mongezi Mpofu",
    birthday: "29 Nov",
    job: "R 260",
    payout: Pending,
  },
  {
    birth: "DEC",
    image:
      "https://images.pexels.com/photos/975657/pexels-photo-975657.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "Talayiwa Ngwenya",
    birthday: "6 Dec",
    job: "R 230",
    payout: Pending,
  },
  {
    birth: "JAN",
    image:
      "https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "Cleopatra",
    birthday: "18 Jan",
    job: "R 280",
    payout: Received,
  },
  {
    birth: "MAY",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/385705379_228640573528122_3757889377373215983_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=G1bwU6hvJ9cQ7kNvgEKnebe&_nc_ht=scontent-jnb2-1.xx&_nc_gid=As7yYYri0R5j2hBQQgKu7bf&oh=00_AYC9RzxByBnYAImgkTvpqLiuezn01QkdZzhYVDluQ7Mmrw&oe=66F85CB3",
    name: "Dingani Mzala",
    birthday: "15 May",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "APR",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/407487263_265027076556138_3950022296222365989_n.jpg?stp=c0.106.960.960a_dst-jpg_s206x206&_nc_cat=108&ccb=1-7&_nc_sid=50ad20&_nc_ohc=vuOuKPRiNAwQ7kNvgGvb7or&_nc_ht=scontent-jnb2-1.xx&_nc_gid=AlY0nHhFdp0vh2EwjcF6p7T&oh=00_AYD1U13WXBkyq12PrpVSZrrGK2Ze7SNHL1M0qnqbxRqb0w&oe=66F857FE",
    name: "Talent Khumalo",
    birthday: "3 April",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "JAN",
    image:
      "https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&w=300",
    name: "Lungile Mamvelase",
    birthday: "4 Jan",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "APR",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/339980276_223525193680119_7712516204439159023_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=bXIZoIKv7cYQ7kNvgH8FsT7&_nc_ht=scontent-jnb2-1.xx&_nc_gid=Ap_aXhTgXfvx1AboXOp-8ju&oh=00_AYCVb5NfKIG32YuKOhyi4-M_EW0OVUH4TF8VJSi9J_rdtQ&oe=66F82E8D",
    name: "Brian Khabz",
    birthday: "5 April",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "MAY",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t1.6435-9/123452655_106379454611227_3846798244692864814_n.jpg?stp=dst-jpg_s206x206&_nc_cat=103&ccb=1-7&_nc_sid=fe5ecc&_nc_ohc=U9iTvgAlAqEQ7kNvgHmdXdN&_nc_ht=scontent-jnb2-1.xx&_nc_gid=Al4Ou9JnfhqnEUsk-q6e954&oh=00_AYC1dseH_4UjusPFCFRQJOGnu_gf573fVRmgiybYAs7Ysg&oe=6719F660",
    name: "Luckness",
    birthday: "11 May",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "MAY",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/369545420_203690676023112_2544453977980496985_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KCZ3nDjTTIMQ7kNvgGlUxe4&_nc_ht=scontent-jnb2-1.xx&oh=00_AYCzIrgeVGEQhBrcNVIeeFRNSg3d0xeoEU8JR8ps4tE-ZQ&oe=66F85CCE",
    name: "Nhlonipho",
    birthday: "28 May",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "JUL",
    image:
      "https://images.pexels.com/photos/5592306/pexels-photo-5592306.jpeg?auto=compress&cs=tinysrgb&w=300",
    name: "Mqondisi",
    birthday: "27 July",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "OCT",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-1/429980848_7157017124418277_6265720796755595063_n.jpg?stp=dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=HhzGzoj0VY8Q7kNvgHiPYPb&_nc_ht=scontent-jnb2-1.xx&_nc_gid=AhfaULNmVmU1nUjl_EJ0rxB&oh=00_AYA28Df2opf4ib0Q73D8l8e3hB5GZTH-DBXalNmOvMTH4w&oe=66F83DFB",
    name: "Smah Sibanda",
    birthday: "13 October",
    job: "notSubscribed",
    payout: notSubscribed,
  },
  {
    birth: "OCT",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/289636800_102380152534901_1826825140103341355_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=TPy2V-KNMrIQ7kNvgHBMhKN&_nc_ht=scontent-jnb2-1.xx&oh=00_AYAmKc3iU4XKGFK023dGZ-ddt3SViaH09TkGvk97TCywfQ&oe=66F8C723",
    name: "Simiso Ncube",
    birthday: "26 October",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "NOV",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/356154663_169248529467327_7404473305315314979_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1kxo9WW5AUYQ7kNvgHvc_fw&_nc_ht=scontent-jnb2-1.xx&_nc_gid=AYppUX9-347uxHRbe_eYGai&oh=00_AYCXSb9ik1-6N-EA5e_qTDavTMvH7wNBbk3doxRcjkWspg&oe=66F84063",
    name: "Thembani Ndlovu",
    birthday: "26 November",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "DEC",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/361845728_1048558619458637_4657298162654746545_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YXYWERuWilAQ7kNvgHJfoWd&_nc_ht=scontent-jnb2-1.xx&_nc_gid=AYlj9VVqOR3o1cPscWyVLvf&oh=00_AYDo2uxYd4fJ5Te9EEreTCMrc0QTAdylpd-gXIUAqhuXNA&oe=66F8500D",
    name: "Patie Nkiwane",
    birthday: "6 December",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "OCT",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/306515200_113160141531978_6632112991102497812_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=yyr-BC_mlBcQ7kNvgF-8aQ8&_nc_ht=scontent-jnb2-1.xx&oh=00_AYCb2L6fdZdxT4_JTC9dGmRx375AFwdrZU7r81iDN3QNMg&oe=66F83EEF",
    name: "Faith Masoe",
    birthday: "3 October",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "DEC",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t1.6435-9/78644009_148210676588031_8849687896165187584_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=PG6v3ixbXfcQ7kNvgGhSqKy&_nc_ht=scontent-jnb2-1.xx&_nc_gid=Ai0_5eL4DDufvwyVx9I2QEa&oh=00_AYCkZ4MDNeegtPGQ3wp2GiwyzbtzxEt5--rVEJBcL2Atgw&oe=6719F20F",
    name: "Thuthukani Mpala",
    birthday: "19 December",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "FEB",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/345592398_528440716012513_4836317305485648974_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RMoRRu9Pg2wQ7kNvgEO0wbi&_nc_ht=scontent-jnb2-1.xx&_nc_gid=AFKxOcmICfviQuG0A1if6zR&oh=00_AYDX11gNHXEVAu6Ff1oS7LlFDbVdCKlJjdBImy0q-aaq8g&oe=66F83427",
    name: "Mobby Ndlovu",
    birthday: "19 Feb",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "SEPT",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t1.6435-9/131919487_213921556929850_7965050368452013396_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=kbIwCCgHcesQ7kNvgHWdL0A&_nc_ht=scontent-jnb2-1.xx&oh=00_AYA_Tpl5gGALlyP_BFEmgDwAHiMiMh1WjtBTNzywObTo9A&oe=6719F9A9",
    name: "Smiso Mambokazi",
    birthday: "18 Sept",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "MAY",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t1.6435-1/138392991_221697129595306_6248928143083973228_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=gssSLB3pMm4Q7kNvgHAI_mb&_nc_ht=scontent-jnb2-1.xx&_nc_gid=AOp9laCFqCJPTeIsiJjNgqR&oh=00_AYCjeS6myxRnAY7EIe1Xo94jgWgWRTq9-vwV4c4GoY4JqQ&oe=671A2CA6",
    name: "Thenjie Madubazi",
    birthday: "26 May",
    job: "R 280",
    payout: Received,
  },
  {
    birth: "JUN",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/357684170_174105685648278_160391493138029429_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9OepL_4edioQ7kNvgEgtgOm&_nc_ht=scontent-jnb2-1.xx&_nc_gid=ASViM9WeZhRnMYuvfRUruZC&oh=00_AYBv-xTtzpWIt5HSBpMHXRfDpKw5qU-rnHs0AoEA7tw7ug&oe=66F879A1",
    name: "Nomazulu Bhebhe",
    birthday: "26 June",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "JUN",
    image:
      "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "Nozwelo",
    birthday: "June",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "JUN",
    image:
      "https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "Nomsa Ncube",
    birthday: "June",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "JUN",
    image:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "Claudius",
    birthday: "June",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "JUN",
    image:
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Percy",
    birthday: "June",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "SEPT",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/235910062_133535732232927_4131167058301119924_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=IyoZPlbm1HsQ7kNvgHiEmu8&_nc_ht=scontent-jnb2-1.xx&_nc_gid=AedLaSoUlM4ek_3D9CjKFdu&oh=00_AYDyS-ENOcYi2bUOWmidFPUpmSDYR5f9cf7EwVrPnm5ifg&oe=66FBA4E0",
    name: "Sharon Moyo",
    birthday: "28 September",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "SEPT",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/417872074_2278035715735274_872960097053354170_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=iZ440NDjengQ7kNvgHRo6ES&_nc_ht=scontent-jnb2-1.xx&_nc_gid=A3TX9mg6_tOWW4wRFyW0e0A&oh=00_AYDowHqxvUXsNeQTthgP9rBqQKwabA0DW08Q80C81okn2g&oe=66FD842E",
    name: "Naboth Sibanda",
    birthday: "28 September",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "JUN",
    image:
      "https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Sphe Ndlela",
    birthday: "June",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "JUN",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/395319526_329829783099170_7858525566134755508_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=XV6e7hMqvzMQ7kNvgHS1Jqo&_nc_ht=scontent-jnb2-1.xx&_nc_gid=Au9jHLrSUlw51lWAfAiw7tm&oh=00_AYDcXCVBfGk6pR9TgjkBU0tXaC4PvUu2d11t0sk3rQLvqw&oe=66FB7E20",
    name: "Stha Khumalo",
    birthday: "June",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "JUN",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/447620242_1261629068145245_7729968035912914238_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JU6ajLQkiz8Q7kNvgGz_pSN&_nc_ht=scontent-jnb2-1.xx&oh=00_AYCOs7tbRrBHZfcmIK4X34beFTR7sFQvZuhHUT9CIGPQnA&oe=66FB8A28",
    name: "Zibusiso",
    birthday: "June",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "APR",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/313346205_5431957586914268_964040798558381679_n.jpg?stp=c0.79.720.720a_cp6_dst-jpg_s206x206&_nc_cat=111&ccb=1-7&_nc_sid=714c7a&_nc_ohc=ijcAiip24HIQ7kNvgErwZU2&_nc_ht=scontent-jnb2-1.xx&_nc_gid=A4rG7ul14vqjTB_SBdzR6ZF&oh=00_AYDuoKZCaCV9M3BG8V766-gN1W9NcFVhCnos7z1G47NXOA&oe=66FB9B63",
    name: "Yvonne Ndlovu",
    birthday: "25 April",
    job: notSubscribed,
    payout: notSubscribed,
  },
];
