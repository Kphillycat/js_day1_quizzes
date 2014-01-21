function countSentences(sentence) {
  count = 0;
  for(var i in sentence){ 	
   	if((sentence[i] == ".") || (sentence[i] == "?"))
   		count++;
   }
  return count;
}