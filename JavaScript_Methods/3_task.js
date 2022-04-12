//Задание 3
var paragraph =
    "Однажды я шел перед вечером мимо базарной площади в лесничество. " +
    "Оно помещалось на окраине городка над рекой. " +
    "Среди улицы мальчишки играли в футбол. " +
    "Громкоговоритель висел на телеграфном столбе. " +
    "Он неожиданно защелкал."

function parag(paragraph)
{
    var Sentences=paragraph.split(".");

    var words =[];

    for(var i = 0;i < Sentences.length - 1 ;i++)
    {
        words[i] = Sentences[i].split(" ");
    }

    words[0].unshift(" ")

    for (var j = 0;j < Sentences.length - 1;j++)
    {
        words[j].shift()
        words[j].push(".")

        Sentences[j] =
            {
                length: words[j].length-1,
                words: words[j]
            }
    }
    return Sentences
}
console.log(parag(paragraph));