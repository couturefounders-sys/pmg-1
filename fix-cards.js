const fs = require('fs');
const path = require('path');

const base = 'C:\\Users\\suria\\OneDrive\\Desktop\\pmg-z\\app';

const pageDirs = [
  'branding-marketing-consulting',
  'bpo-fractional-talent-consulting',
  'customer-experience-consulting',
  'mergers-acquisitions-consulting',
  'strategy-operations-consulting',
  'people-organizations-consulting',
  'crisis-transition-management',
  'why-functional-consulting',
  'our-functional-areas',
];

for (const dir of pageDirs) {
  const filePath = path.join(base, dir, 'page.tsx');
  if (!fs.existsSync(filePath)) { console.log('SKIP (not found):', dir); continue; }
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const output = [];
  let i = 0, count = 0;

  while (i < lines.length) {
    const line = lines[i];
    const iconMatch = line.match(/^( +)<div className="(w-\d+ h-\d+) mb-4 (flex items-center justify-center bg-\[#14358A\][^"]*)"/);

    if (iconMatch) {
      count++;
      const indent = iconMatch[1];
      const sizeClass = iconMatch[2];
      const restClass = iconMatch[3];
      const inner = indent + '  ';

      // New icon div opening (no mb-4)
      const newIconDiv = `${inner}<div className="${sizeClass} ${restClass}">`;
      const innerLines = [newIconDiv];
      i++;

      // Collect icon div content until its closing </div>
      let depth = 1;
      while (i < lines.length && depth > 0) {
        const l = lines[i];
        const opens = (l.match(/<div[\s>/]/g) || []).length;
        const closes = (l.match(/<\/div>/g) || []).length;
        depth += opens - closes;
        if (depth > 0) {
          innerLines.push(inner + '  ' + l.trim());
        } else {
          innerLines.push(`${inner}</div>`);
        }
        i++;
      }

      // Skip blank lines before h3
      while (i < lines.length && lines[i].trim() === '') i++;

      // Collect h3 block until </h3>
      const h3Lines = [];
      while (i < lines.length) {
        const l = lines[i];
        const fixed = l.replace(/className="mb-\d+"/, 'className="mb-0"');
        h3Lines.push(`${inner}${fixed.trim()}`);
        i++;
        if (l.includes('</h3>')) break;
      }

      // Emit wrapped structure
      output.push(`${indent}<div className="flex items-center gap-4 mb-4">`);
      output.push(...innerLines);
      output.push(...h3Lines);
      output.push(`${indent}</div>`);
    } else {
      output.push(line);
      i++;
    }
  }

  fs.writeFileSync(filePath, output.join('\n'), 'utf8');
  console.log(`${dir}: ${count} cards`);
}
