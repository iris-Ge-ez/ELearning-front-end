import Vue from 'vue'

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const dateFilter = value => {
  return formatDate(value);
};

function formatDate(inputDate) {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const msc = date.getMilliseconds()
  const formattedDate = year + "-" + month + "-" + date+" "+min+":"+sec+":"+msc;
  
  return get_time_diff(inputDate);
}





function get_time_diff( datetime )
{
   

    var datetime = new Date( datetime ).getTime();
    var now = new Date().getTime();

    if( isNaN(datetime) )
    {
        return "";
    }

    // console.log( datetime + " " + now);

    if (datetime < now) {
        var milisec_diff = now - datetime;
    }else{
        var milisec_diff = datetime - now;
    }

    var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));

    var date_diff = new Date( milisec_diff );

    if (days>0){return days+" Days ago"};
    if((days<1) & (date_diff.getHours()-3>0)){ return date_diff.getHours()+" Hours ago"}

    if (((days<1) & (date_diff.getHours()-3<1)) & (date_diff.getMinutes()>0)){return date_diff.getMinutes()+" Minutes ago"}

    if((((days<1) & (date_diff.getHours()-3<1)) & (date_diff.getMinutes()<1)) ){
        return date_diff.getSeconds() +" Seconds ago"
    }
   
}





Vue.filter('date', dateFilter)
