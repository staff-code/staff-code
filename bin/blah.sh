BOB="https://uploads.github.com/repos/Sagittal/staff-code/releases/35447276/assets{?name,label}"

JIM=${BOB/"{?name,label}"/""}

echo "${JIM}"
