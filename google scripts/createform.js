
function createForm() {
  var title = 'Safe Stalls Input Form';
  var description = 'Add to our our Safe Stalls database to help trans and queer folk be able to use the restroom safely.';

  var form = FormApp.create(title)
      .setDescription(description)
      .setConfirmationMessage('Thank you for helping queer and trans folk avoid harrsment in public restrooms!');

  var item = form.addTextItem();
    item.setTitle("Location or Place or Business Name:")
    item.setRequired(true);

  form.addTextItem()
    .setTitle('Street Address')
    .setRequired(true);

  form.addTextItem()
    .setTitle('City')
    .setRequired(true);
  
  var litem = form.addListItem()
    litem.setTitle('State')
    litem.setRequired(true)
    litem.setChoices([
      litem.createChoice('Alabama'),
      litem.createChoice('Alaska'),
      litem.createChoice('Arizona'),
      litem.createChoice('Arkansas'),
      litem.createChoice('California'),
      litem.createChoice('Colorado'),
      litem.createChoice('Connecticut'),
      litem.createChoice('Delaware'),
      litem.createChoice('District of Columbia'),
      litem.createChoice('Florida'),
      litem.createChoice('Georgia'),
      litem.createChoice('Hawaii'),
      litem.createChoice('Idaho'),
      litem.createChoice('Illinois'),
      litem.createChoice('Indiana'),
      litem.createChoice('Iowa'),
      litem.createChoice('Kansas'),
      litem.createChoice('Kentucky'),
      litem.createChoice('Louisiana'),
      litem.createChoice('Maine'),
      litem.createChoice('Maryland'),
      litem.createChoice('Massachusetts'),
      litem.createChoice('Michigan'),
      litem.createChoice('Minnesota'),
      litem.createChoice('Mississippi'),
      litem.createChoice('Missouri'),
      litem.createChoice('Montana'),
      litem.createChoice('Nebraska'),
      litem.createChoice('Nevada'),
      litem.createChoice('New Hampshire'),
      litem.createChoice('New Jersey'),
      litem.createChoice('New Mexico'),
      litem.createChoice('New York'),
      litem.createChoice('North Carolina'),
      litem.createChoice('North Dakota'),
      litem.createChoice('Ohio'),
      litem.createChoice('Oklahoma'),
      litem.createChoice('Oregon'),
      litem.createChoice('Pennsylvania'),
      litem.createChoice('Rhode Island'),
      litem.createChoice('South Carolina'),
      litem.createChoice('South Dakota'),
      litem.createChoice('Tennessee'),
      litem.createChoice('Texas'),
      litem.createChoice('Utah'),
      litem.createChoice('Vermont'),
      litem.createChoice('Virginia'),
      litem.createChoice('Washington'),
      litem.createChoice('West Virginia'),
      litem.createChoice('Wisconsin'),
      litem.createChoice('Wyoming')
    ]);
  
  var mitem = form.addMultipleChoiceItem()
    mitem.setTitle('This restroom is:')
    mitem.setChoices([
      mitem.createChoice('Gender Neutral / Unisex'),
      mitem.createChoice('Single Stall Gendered, or Safe Space')
      ])
    mitem.setRequired(true);

  var citem = form.addCheckboxItem()
      citem.setTitle('Accessable?')
      citem.setChoices([
        citem.createChoice('Yes, the restroom is Accessable!')
        ]);

  var pitem = form.addParagraphTextItem()
      pitem.setTitle('Directions(floor, part of building, etc')
      pitem.setRequired(false);

  form.addParagraphTextItem()
      .setTitle('Comments')
      .setRequired(false);

  form.setDestination(FormApp.DestinationType.SPREADSHEET, '0ApcyOCZecYGkdGllNlVIVnlyNmF2d0JfaExSQ3pVYmc');
  Logger.log(form.getEditUrl());
  Logger.log(form.getPublishedUrl());
}