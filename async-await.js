/*O async/await é uma forma de lidar com o problema dos callbacks.

Ele permite escrever código assíncrono de forma mais limpa e legível.

O async é uma palavra-chave que pode ser usada para definir uma função assíncrona.

O await é uma palavra-chave que pode ser usada para esperar a resolução de uma promessa.

Normalmente, não iremos criar promessas manualmente, mas sim utilizar funções que retornam promessas.

*/
const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
      const error = false;
  
      if (error) {
        reject(new Error("error in login!"));
      }
  
      console.log("user logged!");
      resolve({ email });
    });
  };
  
  const getUserVideos = (email) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("getUserVideos");
        resolve(["video1", "video2", "video3"]);
      }, 2000);
    });
  };
  
  const getVideoDetails = (video) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("getVideoDetails");
        resolve({ title: "video title" });
      }, 2500);
    });
  };
  
  const displayUser = async () => {
    try {
      const user = await loginUser("felipe@gmail.com", "123456");
      const videos = await getUserVideos(user.email);
      const videoDetails = await getVideoDetails(videos[0]);
  
      console.log({ videoDetails });
    } catch (error) {
      console.log({ error });
    }
  };
  
  displayUser();