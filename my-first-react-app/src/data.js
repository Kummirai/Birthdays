const payouts = ["Received", "Pending", "notSubscribed"];
const [Received, Pending, notSubscribed] = payouts;

export const birthdays = [
  {
    birth: "SEPT",
    image: "milton.jpg",
    name: "Milton Kumirai",
    birthday: "18 Sept",
    job: "R 100",
    payout: Pending,
  },
  {
    birth: "SEPT",
    image: "Kays.jpeg",
    name: "Kayz Dube",
    birthday: "29 Sept",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "FEB",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/345592398_528440716012513_4836317305485648974_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mLEqn8OmSVwQ7kNvgF_EybS&_nc_ht=scontent-jnb2-1.xx&oh=00_AYChikPpv_2eM9FOroZUqnXr88V2TzAGU6IZp-ARoElGkw&oe=66FE22E7",
    name: "Mobby Ndlovu",
    birthday: "19 Feb",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "OCT",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/337275656_1147635109254061_3911228119345102921_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=JjsH1E0XDS0Q7kNvgGL1aap&_nc_ht=scontent-jnb2-1.xx&_nc_gid=ASYhuvzKXbTVhPV0fWwbJuc&oh=00_AYAeLcyNtwKVYwvdHBJE7b9eJCVMlsRhtTFvcbrFYONlFQ&oe=66FE2BC8",
    name: "Smah Sibanda",
    birthday: "13 October",
    job: "notSubscribed",
    payout: notSubscribed,
  },
  {
    birth: "JUN",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/447620242_1261629068145245_7729968035912914238_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JU6ajLQkiz8Q7kNvgGz_pSN&_nc_ht=scontent-jnb2-1.xx&oh=00_AYCOs7tbRrBHZfcmIK4X34beFTR7sFQvZuhHUT9CIGPQnA&oe=66FB8A28",
    name: "Zibusiso",
    birthday: "2024",
    job: notSubscribed,
    payout: notSubscribed,
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
    birth: "JUL",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/449783164_7430234567099542_4572840874129830452_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4DPbuDFVUbcQ7kNvgHVQAsa&_nc_ht=scontent-jnb2-1.xx&_nc_gid=AWX88gRhqxiGLD9g5Dq6PGf&oh=00_AYChHp399MPdo-CaBShryCAvI4sfyytSryMuivOkVz8xcQ&oe=66FE2DD4",
    name: "Gracious Mguni",
    birthday: "4 July",
    job: "R 280",
    payout: Received,
  },
  {
    birth: "SEPT",
    image: "naboth.jpg",
    name: "Naboth Sibanda",
    birthday: "28 September",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "JAN",
    image:
      "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Freelance Moyo",
    birthday: "23 Jan",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "MAY",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t1.6435-9/71543250_2711345865596080_8547529142936010752_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=OOevDtVW0eoQ7kNvgFCo3rb&_nc_ht=scontent-jnb2-1.xx&_nc_gid=AWVTovLGCOJgn0qSDl0MwMl&oh=00_AYDPv-8B2ax-OsStDfZsbIdEMVZjucGXa7wjBbDKu_K18g&oe=671FC397",
    name: "Sakhile Moyo",
    birthday: "29 May",
    job: "R 400",
    payout: Received,
  },
  {
    birth: "DEC",
    image: "./src/assets/audience.jpeg",
    name: "Audience Sibanda",
    birthday: "19 Dec",
    job: "R 380",
    payout: Pending,
  },
  {
    birth: "APR",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t1.18169-9/10559856_534606840001198_2730786144975738687_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=ce0548&_nc_ohc=tc1HYhyybEgQ7kNvgGsKfeC&_nc_ht=scontent-jnb2-1.xx&oh=00_AYCgfdHtUa9RmeXVACPSDUegBlPTRvLxIp9FiOGznqLN8g&oe=671FD2B7",
    name: "Khulekani Khumalo",
    birthday: "23 April",
    job: "R 320",
    payout: Received,
  },
  {
    birth: "JAN",
    image:
      "https://images.pexels.com/photos/5592306/pexels-photo-5592306.jpeg?auto=compress&cs=tinysrgb&w=300",
    name: "Mzingaye Ndebele",
    birthday: "5 Jan",
    job: "R 400",
    payout: Received,
  },
  {
    birth: "JAN",
    image:
      "https://images.pexels.com/photos/5592306/pexels-photo-5592306.jpeg?auto=compress&cs=tinysrgb&w=300",
    name: "Webster Nyathi",
    birthday: "6 Jan",
    job: "R 280",
    payout: Received,
  },
  {
    birth: "FEB",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/318758533_3249176942014946_8743894333049547814_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=OuISqD2HA3sQ7kNvgExmd0R&_nc_ht=scontent-jnb2-1.xx&_nc_gid=A4IFuMLb9hOuZwwpoLwxdMh&oh=00_AYDWLOh550GaB8Facf_QYo2hj_loiV0Za5dl-vWrB9M5zw&oe=66FE382A",
    name: "Debra Tshuma",
    birthday: "19 Feb",
    job: "R 230",
    payout: Received,
  },
  {
    birth: "MAR",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/379135827_1375694563342752_1654984553748806869_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zrx1K-2kniIQ7kNvgH4sEK4&_nc_ht=scontent-jnb2-1.xx&_nc_gid=AcfcczVkpZmX6St6pWWmMhG&oh=00_AYBKogRF9-YTHL9W4mwl9QdxR1yu08IC_ZzMtg5FJVinow&oe=66FE3463",
    name: "Nosisa Tshuma",
    birthday: "22 March",
    job: "R 180",
    payout: Received,
  },
  {
    birth: "MAY",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/430112479_122132765612123614_83386428259867008_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=oq261-3IORwQ7kNvgEw4VPb&_nc_ht=scontent-jnb2-1.xx&oh=00_AYCLA0WJmZtAhqxYv2VwMUeIafTdoSQ-y08ev763tvMm8w&oe=66FE45A5",
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
    job: "R 40",
    payout: Received,
  },
  {
    birth: "MAY",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/404420774_6812595095503427_6457550863345402062_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Bf8aRi_dcwcQ7kNvgFPgAH7&_nc_ht=scontent-jnb2-1.xx&oh=00_AYBF_WPwAl8rq1MeEWNMYLBjoQagq-LjlRSQrZWoXYDfEQ&oe=66FE27A7",
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
      "https://images.pexels.com/photos/5592306/pexels-photo-5592306.jpeg?auto=compress&cs=tinysrgb&w=300",
    name: "Thabani Moyo",
    birthday: "23 July",
    job: "R 280",
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
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/427725317_381910171116349_263624871606214751_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=XNGEoTjCcagQ7kNvgH9S5sM&_nc_ht=scontent-jnb2-1.xx&oh=00_AYCW7rLRWOqII_6Go2c6JFqR3-3avxLBC-mJdhI0JSGhuQ&oe=66FE36B0",
    name: "Pamela Phiri",
    birthday: "29 August",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "SEPT",
    image: "mosesFusi.jpg",
    name: "Moses Fusi",
    birthday: "30 Sept",
    job: "R 200",
    payout: Pending,
  },
  {
    birth: "OCT",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/245527788_568813674368601_7716348227149492240_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=WWZ6yPMvSq8Q7kNvgHQJUcT&_nc_ht=scontent-jnb2-1.xx&oh=00_AYAOCozLICtDChtRt5RvmTumxjTjkn4xLz6E0i9ephA_rg&oe=66FE1616",
    name: "Patie Sibanda",
    birthday: "24 October",
    job: "R 440",
    payout: Pending,
  },
  {
    birth: "OCT",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t1.6435-9/119738772_326901695052850_574529847236002070_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=REbOzviPoMMQ7kNvgEqa3Dn&_nc_ht=scontent-jnb2-1.xx&_nc_gid=AZtjB26JqfRQ5r49Y6-x0p0&oh=00_AYD6gLp7H0wFarZg3xsqkZ7kyukw8qSW7nKWXQnHOlRq6w&oe=671FE476",
    name: "Sisa Nkala",
    birthday: "29 Oct",
    job: "R 220",
    payout: Pending,
  },
  {
    birth: "NOV",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/403726462_352386567338470_2832949745564559296_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0UCaJr11ZlAQ7kNvgEy8pSJ&_nc_ht=scontent-jnb2-1.xx&_nc_gid=AVaANaZ0tWAiJO6cuKN9M3U&oh=00_AYBJDMmMvsWJt7AW5qPhHMSOyVVFGGw5y2XPs_CvcuLxqQ&oe=66FE41A1",
    name: "Mongezi Mpofu",
    birthday: "29 Nov",
    job: "R 260",
    payout: Pending,
  },
  {
    birth: "DEC",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/408166509_303830285450453_3542580087578380878_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=GMJ1MyjOC6wQ7kNvgHQ1u-0&_nc_ht=scontent-jnb2-1.xx&_nc_gid=Am4_y0W1AipfJm5la1_QC4P&oh=00_AYC_gc4tSsDXx7iRCWqAl74Mz25b0SGAmuDijj4k4Vjg6A&oe=66FE452B",
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
      "https://images.pexels.com/photos/5592306/pexels-photo-5592306.jpeg?auto=compress&cs=tinysrgb&w=300",
    name: "Dingani Mzala",
    birthday: "15 May",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "APR",
    image:
      "https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=600",
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
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/356887735_1672273903199442_3422658239553579572_n.jpg?stp=dst-jpg_s206x206&_nc_cat=103&ccb=1-7&_nc_sid=fe5ecc&_nc_ohc=2S01yL32EMcQ7kNvgE4LnF-&_nc_ht=scontent-jnb2-1.xx&_nc_gid=AQ9TT3uwwtPQia8bgNmdCE9&oh=00_AYCKfWniLhDI52lsq1ArHZPT9C3BOX3JQxmSMAB1Mcz7OQ&oe=66FE2BB0",
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
      "https://images.pexels.com/photos/5592306/pexels-photo-5592306.jpeg?auto=compress&cs=tinysrgb&w=300",
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
      "https://images.pexels.com/photos/3060659/pexels-photo-3060659.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Simiso Ncube",
    birthday: "26 October",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "NOV",
    image:
      "https://images.pexels.com/photos/5592306/pexels-photo-5592306.jpeg?auto=compress&cs=tinysrgb&w=300",
    name: "Thembani Ndlovu",
    birthday: "26 November",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "DEC",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t1.6435-9/78412901_237199657261208_7527970238340530176_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=u3ZPF6bRt0cQ7kNvgEsV-vt&_nc_ht=scontent-jnb2-1.xx&_nc_gid=A1e5ZOTznyVEs4C92-NfGZz&oh=00_AYAZwZhD-ZhR5aoFd3VmofK7N9AlWHAvrbkQT3xKAwgUig&oe=671FB629",
    name: "Patie Nkiwane",
    birthday: "6 December",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "OCT",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/306515200_113160141531978_6632112991102497812_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=uo7kgsqLFuAQ7kNvgFkOOTd&_nc_ht=scontent-jnb2-1.xx&_nc_gid=ADCKfiaU34bcwssaAEZ0X_R&oh=00_AYC20NsVmFMMmxjOxai2bTUfBDZfXj-DEG2_bN6Vc16e4A&oe=66FE2DAF",
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
    birth: "SEPT",
    image: "twin.jpg",
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
      "https://images.pexels.com/photos/6707031/pexels-photo-6707031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Nomazulu Bhebhe",
    birthday: "2024",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "JUN",
    image:
      "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "Nozwelo",
    birthday: "2024",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "JUN",
    image:
      "https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "Nomsa Ncube",
    birthday: "2024",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "JUN",
    image:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "Claudius",
    birthday: "2024",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "JUN",
    image:
      "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Percy",
    birthday: "2024",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "SEPT",
    image: "sharon.jpg",
    name: "Sharon Moyo",
    birthday: "28 September",
    job: notSubscribed,
    payout: notSubscribed,
  },

  {
    birth: "JUN",
    image:
      "https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Sphe Ndlela",
    birthday: "2024",
    job: notSubscribed,
    payout: notSubscribed,
  },
  {
    birth: "JAN",
    image:
      "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/395319526_329829783099170_7858525566134755508_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=XV6e7hMqvzMQ7kNvgHS1Jqo&_nc_ht=scontent-jnb2-1.xx&_nc_gid=Au9jHLrSUlw51lWAfAiw7tm&oh=00_AYDcXCVBfGk6pR9TgjkBU0tXaC4PvUu2d11t0sk3rQLvqw&oe=66FB7E20",
    name: "Stha Khumalo",
    birthday: "10 January",
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
