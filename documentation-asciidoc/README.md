# AsciiDoctor Template



## Getting started

Install the required tools prior to be able to use this tool.

```
brew install node
brew install asciidoctor
brew install fswatch
gem install asciidoctor-pdf
gem install asciidoctor-diagram
```
You also need to make these two files executable in order to use the live reload feature.

```
chmod +x serve_and_watch.sh
chmod +x compile_doctor.sh
```

You also need to pre-compile the file before the first use
```
asciidoctor -r asciidoctor-diagram *.adoc
```

You can then launch the tool using 
```
./serve_and_watch.sh
```

## Usage
This project is intended to be used on MacOs Terminal.
For any other configuration, it's up to you to figure it out.

You can check [Ascii Doctor documentation](https://docs.asciidoctor.org/) in order to see all the possibilities of this tool.

Here is one of the use I make with it, PDF Generation
```
asciidoctor-pdf -r asciidoctor-diagram index.adoc
```

## Description
This project is intended to easily use ascii-doctor to create pdfs using documentation as code and diagrams as code methodologies.
It is configured with a default template I use for my projects and with hot reload and hot compilation using concurrently and fswatch.
You can consult your documentation being made in real time :fire:

## Visuals
You can see a sample of a pdf generated file [Here](./index.pdf)

## Badges
N/A

## Support
N/A

## Roadmap
N/A

## Contributing
N/A

## Authors and acknowledgment
Youssef Medaghri-Alaoui

## License
MIT

## Project status
Very simple utility project, targetted to be and stay simple and easy to use
