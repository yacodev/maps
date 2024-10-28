export const getUserLocation = async (): Promise<[number, number]> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('position', position);
        resolve([position.coords.longitude, position.coords.latitude]);
      },
      (error) => {
        alert('Geolocation is not supported by your browser');
        console.log(error);
        reject();
      }
    );
  });
};
