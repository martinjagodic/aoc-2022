use std::fs::File;
use std::io::BufReader;
use std::io::prelude::*;

fn main() -> std::io::Result<()> {
    let file = File::open("input.txt")
        .expect("file not found!");
    let  buf_reader = BufReader::new(file);

    let mut vector: Vec<i32> = Vec::new();

    for line in buf_reader.lines() {
        let ln = line.unwrap().parse::<u32>();
        vector.push(ln.unwrap())
    }
    println!("{:?}", vector);
    Ok(())
}