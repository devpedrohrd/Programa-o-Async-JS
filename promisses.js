// Promisses são uma forma de lidar com operações assíncronas de forma mais limpa e legível.
// Elas representam um valor que pode estar disponível agora, no futuro ou nunca.
// Uma promessa pode estar em um de três estados:
// Pending: estado inicial, não foi realizada nem rejeitada.
// Fulfilled: a operação foi realizada com sucesso.
// Rejected: a operação falhou.

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

loginUser("felipe@gmail.com", "1234567") // aqui é chamado o método loginUser que retorna uma promisse
  .then((user) => getUserVideos(user.email)) // aqui é chamado o método getUserVideos que retorna uma promisse
  .then((videos) => getVideoDetails(videos[0])) // aqui é chamado o método getVideoDetails que retorna uma promisse
  .then((videoDetails) => console.log({ videoDetails })) // aqui é chamado o método console.log que retorna uma promisse
  .catch((error) => console.log({ error }));

// Promise.all é um método que recebe um array de promessas e retorna uma nova promessa que é resolvida quando todas as promessas do array forem resolvidas.
const yt = new Promise((resolve) => {
  setTimeout(() => {
    resolve("videos from youtube");
  }, 2000);
});

const fb = new Promise((resolve) => {
  setTimeout(() => {
    resolve("posts from facebook");
  }, 5000);
});

Promise.all([yt, fb]).then((result) => {
  console.log({ result });
});
