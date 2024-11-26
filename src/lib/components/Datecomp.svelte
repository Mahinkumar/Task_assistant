<script lang="ts">
    let currentDate = new Date();
    let formats = [
      'Month dd, yyyy','dd/mm/yyyy', 'mm/dd/yyyy', 'yyyy-mm-dd', 'yyyy/mm/dd'
    ];
    let currentFormatIndex = 0;
  
    function formatDate(pattern: any) {
      const day = String(currentDate.getDate()).padStart(2, '0');
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const year = currentDate.getFullYear();
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const monthName = monthNames[currentDate.getMonth()];
  
      switch (pattern) {
        case 'dd/mm/yyyy':
          return `${day}/${month}/${year}`;
        case 'mm/dd/yyyy':
          return `${month}/${day}/${year}`;
        case 'yyyy-mm-dd':
          return `${year}-${month}-${day}`;
        case 'Month dd, yyyy':
          return `${monthName} ${day}, ${year}`;
        case 'yyyy/mm/dd':
          return `${year}/${month}/${day}`;
        default:
          return `${day}/${month}/${year}`;
      }
    }
  
    // Toggle to the next format on click
    function switchFormat() {
      currentFormatIndex = (currentFormatIndex + 1) % formats.length;
    }
  </script>
  
  <button onclick={switchFormat}>
    <h2>{formatDate(formats[currentFormatIndex])}</h2>
  </button>
  