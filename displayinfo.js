function displayInformation(){
    document.getElementById("salonInformation").innerHTML=`
        <p>${salon.name} shop information</p>
        <p>Location: ${salon.address.street}, ${salon.address.number}</p>
        <p>Open from ${salon.hours.open} to ${salon.hours.close}</p>
        ;`

}
displayInformation();