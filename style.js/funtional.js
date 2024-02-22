function setbgcolor(Elements){
    const Elementbyid = document.getElementById(Elements);
    Elementbyid.classList.add('bg-green-500');
}
function ticketnumber(Elements){
    const ticketupdatenumber = document.getElementById(Elements);
    const ticketupdate = ticketupdatenumber.innerText;
    const ticketnumber = parseInt(ticketupdate);
    const newticketnumer = ticketnumber + 1;
    ticketupdatenumber.innerText = newticketnumer;

}
function sits(){
    const sitsname = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4' ]
    return sitsname;
}