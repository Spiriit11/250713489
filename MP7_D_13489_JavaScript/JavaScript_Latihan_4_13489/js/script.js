function fn_Valform(){
    var sMsg="";
    var umur = document.getElementById("umur").value;
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var kat = document.getElementById("kategori").value;
    var temp = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;
    var sInfo="";

    if(nama == ""){
        sMsg += "\n* Anda belum mengisikan nama";
    }

    if(email == ""){
        sMsg +="\n* Anda belum mengisikan Email";
    }else if(!temp.test(email)){
        sMsg +="Format tidak valid";
    }

    if(umur = ""){
        sMsg +="\n* Anda belum mengisikan Umur";
    }else if(isNaN(umur)){
        sMsg += "Umur harus angka";
    }

    var umur2 = parseInt(umur);
    if(umur > 60){
        sMsg += "Umur harus di antara 15 - 60";
    }else if(umur >= 15){
        if(umur > 25){
            sInfo ="Peserta Umum";
        }else{
            sInfo= "Peserta Mahasiswa";
        }
    }
    
    var sinfokat="";
    if(kat == ""){
        sMsg += "Anda belum memilih acara";
    }else{
        switch(kat){
            case "W":
                sinfokat="Acara yang dipilih adalah Workshop";
            case "S":
                sinfokat="Acara yang dipilih adalah Seminar";
            case "L":
                sinfokat="Acara yang dipilih Lomba Coding";
        }
    }

    if(sMsg != ""){
        alert("Peringatan:\n" + sMsg);
        return false;
    }
        alert("Terima kasih" + nama +"! Anda terdaftar di acara" + sinfokat + "("+sInfo+")");
        return true;
}

