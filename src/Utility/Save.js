const getStoredDonationApplication = () =>{
    const storedDonationApplication = localStorage.getItem('Donation-applications');
    if(storedDonationApplication){
        return JSON.parse(storedDonationApplication);
    }
    return [];
}


const saveDonationApplication = id =>{
    const storedDonationApplications = getStoredDonationApplication();
    const exists = storedDonationApplications.find(DonationId => DonationId === id);
    if(!exists){
        storedDonationApplications.push(id);
        localStorage.setItem('Donation-applications', JSON.stringify(storedDonationApplications))
    }
}

export { getStoredDonationApplication, saveDonationApplication}