var day = new Date;
var weekDayNo = day.getDay();  //for sunday=0, monday=1 tuesday=2 ....

var address = ["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29828.60358447251!2d79.3097657467031!3d20.84884361593591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4ab885b4138c9%3A0x516dc1f36e595f60!2sUmred%2C%20Maharashtra%20441203!5e0!3m2!1sen!2sin!4v1571243994012!5m2!1sen!2sin", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.4319798055867!2d73.86543031439693!3d18.464082075719663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea950f616219%3A0x321bdae2cea9f064!2sVishwakarma%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1571244229351!5m2!1sen!2sin", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0665297889177!2d79.07852831443785!3d21.14975048901388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0ec1afbea19%3A0xc758038d064272d0!2sZero%20Mile%20Stone%20Nagpur!5e0!3m2!1sen!2sin!4v1571244291802!5m2!1sen!2sin", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.911246199686!2d73.84698231439785!3d18.53291247363479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c086a415f8eb%3A0x6a9eca8da4df4d40!2sShivajinagar%20Bus%20Stand%20Rd%2C%20Narveer%20Tanaji%20Wadi%2C%20Shivajinagar%2C%20Pune%2C%20Maharashtra%20411005!5e0!3m2!1sen!2sin!4v1571244363598!5m2!1sen!2sin", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1223658790695!2d73.84773241439775!3d18.523371673924196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07b88692f5d%3A0xf50c6ca526a0eb24!2sBalgandharv%20Chowk%2C%20Gaothan%2C%20Shivajinagar%2C%20Pune%2C%20Maharashtra%20411005!5e0!3m2!1sen!2sin!4v1571245008968!5m2!1sen!2sin", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.783598530801!2d73.8563004143967!3d18.44813207620163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eadb43d1c35f%3A0x1a5cf2ef5a8d0deb!2sKatraj%20Chowk%2C%20Santosh%20Nagar%2C%20Ambegaon%20BK%2C%20Pune%2C%20Maharashtra%20411046!5e0!3m2!1sen!2sin!4v1571245074033!5m2!1sen!2sin", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.492502906675!2d73.90320541439817!3d18.5518220730607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c116b4515adf%3A0xc159784fb1ab15f!2sTrump%20Towers%2C%20East%20Ave%2C%20Palace%20View%20Society%2C%20Kalyani%20Nagar%2C%20Pune%2C%20Maharashtra%20411006!5e0!3m2!1sen!2sin!4v1571245169005!5m2!1sen!2sin"];

var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]

document.querySelector("#current-day").innerHTML = weekDays[weekDayNo];
document.querySelector("#current").src = address[weekDayNo];

document.querySelector("#next-day").src = address[weekDayNo+1];
document.querySelector("#next").innerHTML = weekDays[weekDayNo+1];
document.querySelector("#next-to-next-day").src = address[weekDayNo+2];
document.querySelector("#next-to-next").innerHTML = weekDays[weekDayNo+2];

