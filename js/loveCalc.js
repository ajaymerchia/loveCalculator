function getLove(n1, n2) {

  var ls_NameOne = n1.toUpperCase().trim()
  var li_NameOneLength = n1.length
  var ls_NameTwo = n2.toUpperCase().trim()
  var li_NameTwoLength = n2.length
  var li_LoveValue = 0;

  for (Count=0; Count < li_NameOneLength; Count++) {
    letter1=ls_NameOne.substring(Count,Count+1);
    if (letter1=='A') li_LoveValue+=0.5;
    if (letter1=='B') li_LoveValue+=0.5;
    if (letter1=='C') li_LoveValue+=0.5;
    if (letter1=='D') li_LoveValue+=0.5;
    if (letter1=='E') li_LoveValue+=2;
    if (letter1=='F') li_LoveValue+=0.5;
    if (letter1=='G') li_LoveValue+=0.5;
    if (letter1=='H') li_LoveValue+=0.5;
    if (letter1=='I') li_LoveValue+=0.5;
    if (letter1=='J') li_LoveValue+=0.5;
    if (letter1=='K') li_LoveValue+=0.5;
    if (letter1=='L') li_LoveValue+=2;
    if (letter1=='M') li_LoveValue+=0.5;
    if (letter1=='N') li_LoveValue+=0.5;
    if (letter1=='O') li_LoveValue+=2;
    if (letter1=='P') li_LoveValue+=0.5;
    if (letter1=='Q') li_LoveValue+=0.5;
    if (letter1=='R') li_LoveValue+=0.5;
    if (letter1=='S') li_LoveValue+=0.5;
    if (letter1=='T') li_LoveValue+=0.5;
    if (letter1=='U') li_LoveValue+=0.5;
    if (letter1=='V') li_LoveValue+=2;
    if (letter1=='W') li_LoveValue+=0.5;
    if (letter1=='X') li_LoveValue+=0.5;
    if (letter1=='Y') li_LoveValue+=0.5;
    if (letter1=='Z') li_LoveValue+=0.5;
  }
  for (Count=0; Count < li_NameTwoLength; Count++) {
    letter2=ls_NameTwo.substring(Count,Count+1);
    if (letter2=='A') li_LoveValue+=0.5;
    if (letter2=='B') li_LoveValue+=0.5;
    if (letter2=='C') li_LoveValue+=0.5;
    if (letter2=='D') li_LoveValue+=0.5;
    if (letter2=='E') li_LoveValue+=2;
    if (letter2=='F') li_LoveValue+=0.5;
    if (letter2=='G') li_LoveValue+=0.5;
    if (letter2=='H') li_LoveValue+=0.5;
    if (letter2=='I') li_LoveValue+=0.5;
    if (letter2=='J') li_LoveValue+=0.5;
    if (letter2=='K') li_LoveValue+=0.5;
    if (letter2=='L') li_LoveValue+=0.5;
    if (letter2=='M') li_LoveValue+=0.5;
    if (letter2=='N') li_LoveValue+=0.5;
    if (letter2=='O') li_LoveValue+=0.5;
    if (letter2=='P') li_LoveValue+=0.5;
    if (letter2=='Q') li_LoveValue+=0.5;
    if (letter2=='R') li_LoveValue+=2;
    if (letter2=='S') li_LoveValue+=0.5;
    if (letter2=='T') li_LoveValue+=2;
    if (letter2=='U') li_LoveValue+=2;
    if (letter2=='V') li_LoveValue+=0.5;
    if (letter2=='W') li_LoveValue+=0.5;
    if (letter2=='X') li_LoveValue+=0.5;
    if (letter2=='Y') li_LoveValue+=0.5;
    if (letter2=='Z') li_LoveValue+=0.5;
  }

  val=0;
  if (li_LoveValue> 0) val=  5-((li_NameOneLength+li_NameTwoLength)/2)
  if (li_LoveValue> 2) val= 10-((li_NameOneLength+li_NameTwoLength)/2)
  if (li_LoveValue> 4) val= 20-((li_NameOneLength+li_NameTwoLength)/2)
  if (li_LoveValue> 6) val= 30-((li_NameOneLength+li_NameTwoLength)/2)
  if (li_LoveValue> 8) val= 40-((li_NameOneLength+li_NameTwoLength)/2)
  if (li_LoveValue>10) val= 50-((li_NameOneLength+li_NameTwoLength)/2)
  if (li_LoveValue>12) val= 60-((li_NameOneLength+li_NameTwoLength)/2)
  if (li_LoveValue>14) val= 70-((li_NameOneLength+li_NameTwoLength)/2)
  if (li_LoveValue>16) val= 80-((li_NameOneLength+li_NameTwoLength)/2)
  if (li_LoveValue>18) val= 90-((li_NameOneLength+li_NameTwoLength)/2)
  if (li_LoveValue>20) val=100-((li_NameOneLength+li_NameTwoLength)/2)
  if (li_LoveValue>22) val=110-((li_NameOneLength+li_NameTwoLength)/2)

  return val
}

function exportToCsv(filename, rows) {
    var processRow = function (row) {
        var finalVal = '';
        for (var j = 0; j < row.length; j++) {
            var innerValue = row[j] === null ? '' : row[j].toString();
            if (row[j] instanceof Date) {
                innerValue = row[j].toLocaleString();
            };
            var result = innerValue.replace(/"/g, '""');
            if (result.search(/("|,|\n)/g) >= 0)
                result = '"' + result + '"';
            if (j > 0)
                finalVal += ',';
            finalVal += result;
        }
        return finalVal + '\n';
    };

    var csvFile = '';
    for (var i = 0; i < rows.length; i++) {
        csvFile += processRow(rows[i]);
    }

    var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, filename);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}
