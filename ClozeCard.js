var ClozeCard = function (text, cloze){
    this.cloze = cloze;
    this.fullText = text;
    this.partial = text.replace(cloze, '...');
    
}
//var test = new ClozeCrad("Watson Is Crazy", "crazy");
//console.log(test.partial);

module.exports = ClozeCard;