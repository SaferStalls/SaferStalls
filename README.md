safestalls
==========

Trans/Gender Queer Bathroom Site



#### About the Google Scripts ####
Google scripts should be pasted into a script project on the same google drive account that you are storing the csv file with the old Safe2Pee data.<br><br>

######These scripts create:<br>######
    1. A form "Safe Stalls Input Form" that takes user input and stores it in a seprate sheet in the main data file.<br>
    2. A function "rowFormatted" that adjusts the format of the user input to match the existing data in the old Safe2Pee .csv data file and then appends the inputed data into the .csv file.<br>
    3. Helper functions "accessability" and "type"  that help the function "rowFormatted.<br>
    4. A trigger that automaticly runs "rowFormatted" when the "Safe Stalls Input Form" form is submitted. 
