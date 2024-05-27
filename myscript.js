var uidV, fnameV, mnameV, snameV, addressV, EaddV;

function readFom() {
  uidV = document.getElementById("uid").value;
  fnameV = document.getElementById("fname").value;
  mnameV = document.getElementById("mname").value;
  snameV = document.getElementById("sname").value;
  addressV = document.getElementById("address").value;
  emailV = document.getElementById("Eadd").value;
  console.log(uidV, fnameV, mnameV, snameV, addressV, EaddV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uidV)
    .set({
      uid: uidV,
      fname: fnameV,
      mname: mnameV,
      sname: snameV,
      address: addressV,
      Eadd: EaddV,
    });
  alert("Data Inserted");
  document.getElementById("uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("Eadd").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uidV)
    .on("value", function (snap) {
      document.getElementById("uid").value = snap.val().uid;
      document.getElementById("fname").value = snap.val().fname;
      document.getElementById("mname").value = snap.val().mname;
      document.getElementById("sname").value = snap.val().sname;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("Eadd").value = snap.val().Eadd;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uidV)
    .update({
      //   uid: uidV,
      fname: fnameV,
      mname: mnameV,
      sname: snameV,
      address: addressV,
      Eadd: EaddV,
    });
  alert("Data Update");
  document.getElementById("uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("Eadd").value = "";

};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uidV)
    .remove();
  alert("Data Deleted");
  document.getElementById("uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("Eadd").value = "";

};