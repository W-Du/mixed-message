class pantone {
    constructor(year, name, color) {
        this._year = year;
        this._name = name;
        this._intro = '';
        this._colorHex = color;
    }

    get year() {
        return this._year;
    }

    get name() {
        return this._name;
    }

    get intro() {
        return this._intro;
    }

    set intro(str) {
        if(typeof str === 'string'){
            this._intro = str;
        } else {
            console.log('wrong input for introduction');
        }
    }

    get color() {
        return this._colorHex;
    }

    set color(c) {
        this._colorHex = c;
    }
}


//create objects
const p2023 = new pantone(2023, 'Viva Magenta', '#be3455');
p2023.intro = "Viva Magenta is a nuanced crimson red with pink tones that presents a balance between warm and cool. Rooted in nature, this hybrid colour is powerful, empowering and assertive, but not aggressive – it encourages experimentation and self-expression without restraint. Ultimately, this electrifying, boundary-less shade promotes optimism, joy and strength.";

const p2022 = new pantone(2022, 'Very Peri', '#6667ab');
p2022.intro = "Very Peri is a dynamic periwinkle blue hue with a vivifying violet red undertone. Futuristic in feeling and encouraging inventiveness and creativity, Very Peri blends the faithfulness and constancy of blue with the energy and excitement of red. A brand new shade, it marked the first time Pantone created a new colour in the history of its Colour of the Year forecasts."

const p2021 = new pantone(2021, 'Illuminating and Ultimate Gray', '#f5df4d');
p2021.intro = "Illuminating is a bright and cheerful yellow sparkling with vivacity; a warming yellow shade imbued with solar power.";

const p2020 = new pantone(2020, 'Classic Blue', '#0F4C81');
p2020.intro = "An expansive presence, Classic Blue is evocative of the vast and infinite evening sky opening a world of possibilities.";

const p2019 = new pantone(2019, 'Living Coral', '#ff6f61');
p2019.intro = "Living Coral is an animating and life-affirming coral hue with a golden undertone that energises and enlivens with a softer edge.";

const p2018 = new pantone(2018, 'Ultra Violet', '#5f4b8b');
p2018.intro = 'A dramatically provocative and thoughtful purple shade, Ultra Violet communicates originality, ingenuity, and visionary thinking that points us towards the future.';

const p2017 = new pantone(2017, 'Greenery', '#88b04b');
p2017.intro = "A refreshing and revitalising shade, Greenery is symbolic of new beginnings.";

const p2016 = new pantone(2016, 'Rose Quartz and Serenity', '#f7caca');
p2016.intro = "Rose Quartz is a persuasive yet gentle tone that conveys compassion and a sense of composure.";

const p2015 = new pantone(2015, 'Marsala', '#964f4c');
p2015.intro = "A naturally robust and earthy wine red, Marsala enriches our minds, bodies and souls.";

//create list 
export const colorList = [p2023, p2022, p2021, p2020, p2019, p2018, p2017, p2016, p2015];
