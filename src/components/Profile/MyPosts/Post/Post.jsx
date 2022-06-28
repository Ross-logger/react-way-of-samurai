import React from "react";
import classes from './Post.module.css'

const Post = (props) => {
    return (

        <div className={classes.item}>
            <img
                src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUSEhIVFRUVFRUVFRUQDw8QFRUVFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABAEAACAQIDBQYEBQMCAwkAAAAAAQIDEQQhMQUGEkFREyJhcYGRMqGxwQdCUtHwYnLhIzOCwvEUFiQ0Q3OSorL/xAAaAQACAwEBAAAAAAAAAAAAAAADBAABAgUG/8QAMxEAAgECBQAIBQMFAQAAAAAAAAECAxEEEiExQSIyUWFxgbHwE5GhwdEFFEIzUsLh8SP/2gAMAwEAAhEDEQA/AOmdnkhuUSwdPIjzpjUZiVSkRLBjkoCbBhZxsFYJIMVYhkIOwYCEBYAYLEIEAOwLEIEEhTCIQAkZxmNp0lxTkl6mR2nv7TjdU4uT68im1FXbsiLV2WpswHJcdvrjJ/DNQXSK++pVvb2Lvft6t/CpK3sLyxdJdr8vyEVCb7Pn+DtoZx6lvdj46V5O36owl9jUbA3+U3wYmPC+U4J8P/FHkahiqcnb1KdCcVexuQrAhNNJp3TzTXNBjIIS0JaFsSyEYhoQxbEsswExItiWWQIAQCGbmlcRudMk2EuJzEzvtECdMZlAsZQI86YaMxepSIjiJsPSgNtB07iko2CsEHYBoxYABQRCWBYMIDdiEEt2zMpvJvbCjeMO9PonkvN9fAhb2b3W4qVJ+EpLXyj08zn/AHqjvbJa9EhKvjVTdo7+/mxinhnLWXyJG1NsV8Q7zk2uSWUV6FYy+2RsCriZd3KC1k1ZeS6s1uE3Rp09FfxebZznUdSV5PU6FPCTy3irI5m2KidKxG7lNppwXsZram7bpu8M49OgRUJbpg5wcSjpO2b+Vg3d963m9CVHCr8z4UuvMj4/E3dkrR5WGJXjHViySbL7Ye+VahBU2lOK0vfJdLnRNi7Wp4mmpwef5o84s4jFXNHuvtJ0J3WUk9L2U1zi/Pl4oNha8pPLIDXpxSzI64JEUqilFSi7qSTXk8xbHhYSxLDYTIZEsIMI0igAAAhRp4sOxHpyH4yOY0egTCaESgPCWiJlNEOdMYnAsJRGZ0wkZgZ00yC0Cw9OmNuIdSE5QsJCFWCNmLCTOb5bW7On2cX355ZdPHoW+1ccqMJSbtZXb6I5Ftza0q9Rvrov5qLYqt8OGm7+neGw9PNK72X1GWocWefXkr9W+fl/0LvY2yZYi11KNFPvOKzlbkkRd3N3513xNXin3nnZeC6yN1R2pQwzVCXcyVuJWXT4tP8AoecnNXtz9F4HoaFB5c0tuzt8e71LnAYOnGCjTSUVklFaE2OGK2hi1GSkneEtbaeDNFBJq6GcPaS0CV3KHgysrYRFZitnprNGjnAjVaZ0KcrMUnHMjkG9my5QldfC27fUzEqTVm/I69vVgFKlJ2+HM5Vip2k48n9yTyuWohVpuOqESw+V0KlPuq3p4WEUquoNWrc/tc30bXhzoLWfJ07cPafbUOCTvKnJp+TzX3NMcn3M2h2GJSv3Z5fz+cjq1x+jPNBN77CdSOWTSCYlihLCgwgg2EWUAAAEKLuDyHYyI1KeQ8mc9qx24yuSYyFkaLHoyMWCXFNCWhaYTRRGhmcCNOmTWhuUDcZWBygmQZRE2Jc6ZW7YxUaNKVSXJZeb0sHjIVnTtqYP8Rdr2Sop6vilZ8llFeupi9ibPderGGaTzlbotf2C27jJVakpyecm35LkvaxrdxMCo0+0fxTeX9q09837HF/UK7ctPBHS/TsOpzUXtu/febrYuFjTpqMFwpLJKwMRhXaolZOcGoTkk1GVrJ+4/glZErjS1MRoxcV3HVlJqTtyYvYGy8TQUoV3Fq/djCXEor9vXqbfZcnwJMZqRjOySt1y5EjEThTjdtJIqjRlGo5LYHUneChYlvMaqRKOptlrOKbX9rX1F4XeOjPKV4PTvxa+YzGtFuwKVCcVce2jTTi09GmmcO2/R4K049G17M7lis1rkzj+/lFRxHmrlVnswNeP/m/IzkZEig+fT7oiol4dd1+hqhfMc2paw9TnZwn+lr5O52bZ1XipRfhb2yOO9nZW8fudZ2BK9CD/AKV9M/mdXDxaTv3CNZ3a8/z92WIhoWJYwBYlhBhMswEAIBZdywpTyRJhMgweSHYSFpQHadRosIyFpkSnMkRkLuNhyM0x+MhaYwmOJmAtxwS0BMUUUIcTAb747tG6UPhpqUpS5cUfi9I392brH1eCnOf6YSl7Js5hvo1QwSV3xVezgurWc5t9b8/GRanlTbMVI5kc2qS4pebOg7BxnCox5JJexz+KtKPuXtHH8C4uRzciculwHw9Rwu0dYw2Mjw3bsHh66qydpaapWMBR2o6vD2c1dflbtfyehPw+PrUG6ipS6ztHX9yp5viKNuj2nSp14OF31jfyaprxGqMeN3lnbRPQzOz95ViqblbhceXPI0+D0OgklFWFlLPdlTvTipYeg61NOpLjS4WotRTT+JKztdJXvzvno4exduUsRanXo8E5R4uGaTTTvZxfNZfX10Nek73TaZSbT2A6s41r8MqbbutJRydn5NXXmJSpOLzIaT7/AC9+/Ucrp4aajG7ozyV226cvB9Gc9/EDOtGS5xfyf+TrWDwHaRXarJrKN7PzfTyMxvZuF20uOFaStFqMZRjJcWq72VkEl0qeiFq8b3hFnIUiTTqZW/nIRicPOnKVOpFxnF2knyY0gUJ21RzHHhlh2t2v5qdT3Pq8WGj6/ucphHJPyOi/h9if9OdN/ld15O389TsYaTd7iNeKVjWCWKEsbF2JYQbCLMhADAQofg8kLTG6eiHDDCpjkZD8KhFFRYOUbhoTaLGExaZBhMkQmAlBjsKiZKTDTG0w0wVgwjaUFKjUi9HTmnfLWLOD7y7feLdKCVoUoRV/1S4IqT8rxy/ydJ/E/bsaWFlRhNdpUai4p95Qzcm+nJepxanOwCrOzUWYk9NByp8duhYTlZJW9ypjPvX8TXYDC0q8FGWUkviXX7oFCPxZStuSLyojw2Y3BVaGv5op5rxX7Gi3f3iUmqdV97S8r3v4lTT2bi8PnC0o8mnb5ciTUwqr96pHs5rScLXv4rRjNOnOOsVbu4/AZ1INfY2VDD4fN9nBNu7cYKLb8WtS0pVkYvA4mol3nd9dL+JPhj2uYWdO+qN0a6itTTyxSQVLEqef5I69G19kYrbW8HZQbT7zyivHr5InbLxd9kSnxXl2c+9fO93z6itbR5PP/Xn6eI1TqRk3b3rYvtnbwQlUspJt8WV+jzyNFGSkvM4FgcR2U3VjUS7NRnabzqTbS4Irnk5XfJJnW92NuwrU4yWjV7PJieHqtO0nozU1GrdxVmuN9O0q/wAQN0FiIOrSS7aCyenHFfkl9nyOPwpPvXTTTs01Zp3tZnpa6kjmu/m7KpzliYLuSt2iS0knlL109EM1YfyQlOGbXkwk4WSXkbD8P33peRmKqTTft6WL/cCpatKP9P3v+49hJXficzFxt8zf3DYQB8REsIACygACAQoehoh1CIaIOU0k29ErvyMsImOFdj9tYej8c1fpHvP2RldobVnVvPiai2+FJtd1aerM3tKtZG3TUY3bLi23ZGsxX4g04u0KUpeMmolRivxCxT+BQgvCLk/d/sZF5iZM5060uByNNIv6u+mPf/ryXkor6IY/7y4x64ip6TaKQPisB+K+WEsFj68pu8m23q222/MjWFvNg4ROV5O5taDMkT9nbRdNr+e5HcP8iHSyb6FJTg7xJdHQsFvBRlDvSS82RcVtWjykvcxEBTHFjJNbIrKaRbXSeUhVXbsUtbvojLsTFGP3c9ki8veSMZjJ1ZXeryX2SOgblVp4em6NdLgne8cnwqS5+t7+Zzui7ST6NP2dy2o7bl2jbbs0ldcmtH46sSm6mdSQ3hp04Xct9kL2zsiMMXKjGVouas78mr6/zU2GFxqpOLj8NkrLkkrIp6mOpypThUUYys5cUMr9JLo72M7hNszjHgnmuT5oWcPiSVtEvR9/vUfhWp4e/OfXwt/Frxbaa48DtuzNpKSTT1WRY4iMakHGSTTTTTzTT5HNtzNscatf4X9ToWHqXQ9hqjbcZboutGEoqpDZnH96sD/2fEdmvgavHXRu1vT9h3dOtwYiPiv2L38T8NlCol8MreksvqkZPB1eFwlfOMl7PIfo9CfdocPFRvdHW0xQxh53imO3OkckDCYGEyyAsAACFD0NEUe+2MdPCTs7ObjD0k8/kmXkNEZH8TJf6FL/AN7/AJZg6jtFvuYSO68vUp67tCmuqf0RUbTiya6/FToP+pr5BbSpZXGZrPFr3saj0WZ1BSFSWYUkcOWw+mIYio8h1jFUDU2LQqktfQS2PU7cL87+iIzZmWkURDikOTXdt4iKMbsflFWNQTcWyPcaVkhtsVNZCAU2aQmTHKcchqw+kVT1dyMONFtSf6Vdk/Y2CjOLb10SIcaloyX6rL0Tv+w/s7F8DQ5QdONSLfY7/N/YHPM00ifjdmSjSfN3XjkuRS0YpSXErrR8rJ8zeYKpGrDO2hV0NkUK1SSUnZfptr6jeI/T4z1pvVg4Ylx63BH2DHsMRk7wmu6+uafudVwWLjwpsyGzdhUKVrJytpxu9n4LQuoSB0P0mUZ55y8l+Rl/q0YwyQjpe+u3v5Dm26NLERcJptPo7PW9zl+0cP2NWdPO0ZOKvrbWL87W9zqVBXd+hmN/9mJpYiK6Rnb/AOr+3sNYijFQtFaoThVnUlnkajZEr0YPqkTCk3SxPHh49Vk/PmXYXfUT20AwmABZAgAsAuxQ7B5Izm/NBVKMIN2k53j5qMjRQ0Rit/cY41qEV+W8vdpfZmXl/lsaje6sY+niGlCD/JN/PI0OMj3L+Bntsw4azktJ2kvXX5l9iqn+kvL7FYRtOcH/ABt8uPpYNWSai1z79TMT1YlhvqBnMY2hDGJaj7GJitU2guLIOMboQx6jK0X6A4auzL2FU8h2MxqXP0+objz5B4tx2Mi4wuRZImU5WRFm8wVW2VG0FTWY6xNOOVxbNU42iU2NyFJCZDqRSVyzRbrYhJSUtEnfyY1syv2dfLRu3pyCowdKnGEc6lVXf9MX8K9rsRjEk+Gnn2SXHJfqbO5FuFOF91/23y1Yi+lJ9j9+pu6U7ofgyl2RiuKCfgW1Nj+6uJyViRCdhO0qSq0alP8AVFpefL52Gqkg6dQxKCYSFRxVil/D6teM4c01l5r/AAbJGU2Bs6VDETesKjvF9NW4s1lhWKcYqL4LlZttBBBpBpGjNggCrAJcuwmnojmW+uL48XLpC0PbX6s6VxpRv0V/ZHG8ZWc5Sm/zScv/AJO4DEytC3P41C4eN5X7vUkbbV5Jf0pr1JWKxH+jFeBV4yrxRg+aVvbQlVoN0ovwJGpedRx5Sf0C5ejFPtIeIVrLwBVhZITOd5Lwt8h3EVkxZ5ZZ34JeQXpKyIsmNNXYqqxVL/Ps8/kIS1dgoxJZjq0fl+4MU++xFwekWy+B2Pw+gpTyaFcNl6fz6kWcswsm4JeBS1HJTyGxLYdNZi7bkzexIjpYDFCWNvYwIaJNCK4ldXWr8lm/kR4rMmYN975e5vDxvOz7Spu0WyRVxtnOaffm3Z/pj4eNg9nzcYSu7Rlr1lbl5FfVhwycb3s9Qdo35LJDH7iSqXktVfTv5v8AW/40B/DWWyNJu9ird32Ndh5HN9nYjhkv5kdA2fVvFM6eEq54eAliIWkSqrEQYqsMwYyLrYlwnZouksigUi/o5xT8BetpYNTVw7BC7B2AmrCACrBEJYq9r1LYeo/6GvdW+5ySpT4W49Dqe35f+Gl/wf8A6RznblLhqp8mjGIheGbsfqaw0rNoruRpMNh1KgvIzvDqaWlPhw1+kbmcCrSk32BcQ9FbtMvShnLwDkWGycPem31f0IeJp2dhT4OWjGfb9wynebiQqolPMcqDcY3Zzp9YMHL9kOUUvRZiauoHKysWnZkeotzv6v7jVXUXS/nkMzd3cqcrx1JsEO0UNEiisiqSvItsWwBiRpmQU1qByYqOg2VskQOTeoEnyFNAjLkUlrqQOmrM2m7WL4o2fLIxRc7BxPBUXSQ/gamWdu0XxEc0Td1HkMRY5GV0M3zO0c1MeuXuyat48PNFBFj+GxDhJSXIHVhmjYJTnllqaVxENDmGqqpFSXquj6AlEQT4Y5KHKGbMA5YBq4LKZzeH/wArPwUX7SRi94KXFTjNfl18mbTb+eFrf2MysLTp8L0aD5M8ZQ7UApyytMyyldFxtGtw4aMf1WXos2UlaDhJx6OxLx9TjcIdEl6s5lOrKNOoubW82PyinKL43LbCWhQj5X98yjxFTibZY7Sm0lErZ08rh8W3ZU47JGKP9z5I9QQnbMKoHNaHFbu20NgWglsW1kFTRTT0RdwNWGRyY2YnuWg0ibFEaisySHw60bMyYkMNhB2irhyEIVNiUZm9bEFEeq80SBueTTMVVdFodUeo/QnazXIbYUHYZj0ZA90dA2XiFOCfgO1NTP7s4rWHqi+qM71OeeCZy5xyyaHYMcuR4MduEMGh3WldVI/2v6p/Ytq0LFDuvVtUlfnD6NFhj8byRy60G67S7vQ6lKcFh05d/qO8YCp7dhhfhMU/cR7DIb5bVyVCD6OdvlEr9nSvB+CKJ13NuUneTzZP2firNp80TD1lKd+HsalSywtzyVmIleTfix3Bw4qsV439iHVyk/P7llsn/dv0TOdSeeqk/wC5eo1LSHl9h/bFOzTKvEVcrItNr17vhKOswuOqZZSy87mKEbxTYhik7jbFHITGmhyotPYTFa+Q5Uzs/wCXFxh3W/BBct5e+woj1XfPyGR16DbA1NXc0h/DRyuPDeH09R4co9RGHuJAAQjUikFMNCZBoE3qWGCSuAXh6fFJJdTSTk7LkmwijPLheqHY5k3eDA9nOE0spxV/7lk/lYhLJ+AZwlTm6cuNPLdP5A4yU45lyT9k1OGoma5VLmMp05W4lmvAvtm4ziVnqdXCyyxy/IUrK7uXUGKchinIXN3dhwWa1JmBm1JNP+WLCUiswqfGuiTJ7YOa1MMVcAi4CjN0YPE7Mi1xQyfRaFVVi4PM0kYcMVF92aWd+finzRExFVrKpC66pXAVKEWs0dH9PMehUa0epnay5k/ZrtU9CHinBN8OhJwjtM5tFWrea225Gp9TyJW1KS+Ipq8S+rx4lYpq8LXTC4+nd3tv6maD0sRAwhTOKhoXfL1RIgrwfgv8ESOjJMPhfj+4emzDQzWSskR2PTY2wVXVmoj+GWXqPDWHWQ8OUuojD3CkIiKqaBIk+sRDbFIHCOKizKhJvREbS3G0i42LRjF8c3ZRV22R8PhlbMj4itfur4fr4jkIrDpVJavhd4GTdToof2vtOVZ6Wgn3Vz834kGEuT9A+EQ0KTnOUs8tWFUUlZEzCV5U31T1RZ06kX3ovzRTU6vVew/TnG+V/b9h7D1lFWTVu/gBUptu9jWYSpdImRZU7Np1OFXVl45P2LjCpXV8zrJ6XEpaE/C07K71Y7cO4iTMAGHcALhFGTObf+Cl5/YjVP8Ab9AALh1n5DMOovFmPqalpL/c9F9EEA4OE3l4x/yOlV48H9ifArNpfEwAOnjP6XmAo9crRTDAedXI8xMef85kiPwgAEp8lSI8hDAADI1ElYf4RwMB0KfUXgCe4ioBAAZl1iLYXR1JsgAOhheoxer1hT+CXk/oVvMAAWN3j75ZqjsxQhgAJzDiS32D8QADmA/rIBiOozUrQXSAA7Yg9i2QTCABAMSAACEP/9k='/>
            {props.message}
            <div>

                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}
export default Post;