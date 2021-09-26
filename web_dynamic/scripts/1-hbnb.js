$(document).ready(function () {

        let amenities = [];
        let print_arr = [];
 
    $(':checkbox').change(function() {
  
      let name = $(this).attr("data-name");
    
        if (this.checked) {
          amenities.push(name);
          print_arr.push(' ' + name)
        } else {
        del = $.inArray(name, amenities);
        amenities.splice(del, 1);
        print_arr.splice(del, 1);
        }
   			$("h4").text(print_arr);
		});
});
