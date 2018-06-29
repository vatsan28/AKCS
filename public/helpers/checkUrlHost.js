module.exports = function checkUrlHost(request) {
  var requestForCompany = 'akcs';
  const incomingHost = request.hostname.split('.')[0];
  if (incomingHost=== process.env.AKCS_HOST) {
    requestForCompany='AKCS';
  }  else if (incomingHost === process.env.CATAPULT_HOST) {
    requestForCompany = 'CATAPULT';
  }
  return requestForCompany;
};